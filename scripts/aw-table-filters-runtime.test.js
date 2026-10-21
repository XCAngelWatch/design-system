const assert = require('node:assert/strict');
const { normalize, countActive, validateRanges } = require('../project/demos/aw-table-filters');

const fields = [
  { id: 'search' },
  { id: 'model' },
  { id: 'status' },
  { id: 'version', advanced: true },
  { id: 'createdRange', kind: 'range', advanced: true }
];
const defaults = { search: '', model: '', status: '', version: '', createdRange: ['', ''] };
assert.deepEqual(normalize(fields, defaults), defaults);
assert.equal(countActive(fields, defaults), 0);
assert.equal(countActive(fields, defaults, true), 0);
assert.deepEqual(validateRanges(fields, defaults), {});

const draft = { search: '  sample  ', model: ' K1352 ', status: 'published', version: ' 1.2. ', createdRange: ['2026-10-01', '2026-10-21'], unrelated: 'never sent' };
const snapshot = JSON.stringify(draft);
const normalized = normalize(fields, draft);
assert.deepEqual(normalized, { search: 'sample', model: 'K1352', status: 'published', version: '1.2.', createdRange: ['2026-10-01', '2026-10-21'] }, 'normalize trims text and only returns declared fields');
assert.equal(JSON.stringify(draft), snapshot, 'normalization does not mutate draft values');
assert.notEqual(normalized.createdRange, draft.createdRange, 'the applied range never aliases the draft array');
assert.equal(countActive(fields, normalized), 5, 'a completed date range counts as one field, not two controls');
assert.equal(countActive(fields, normalized, true), 2, 'advanced count excludes visible primary fields');
assert.deepEqual(validateRanges(fields, normalized), {});

for (const range of [['2026-10-01', ''], ['', '2026-10-21'], ['2026-10-01'], [null, '2026-10-21']]) {
  const values = { ...defaults, createdRange: range };
  assert.deepEqual(validateRanges(fields, values), { createdRange: 'incomplete' }, 'an incomplete date pair cannot be submitted');
  assert.equal(countActive(fields, values), 0, 'an incomplete date range is not an active filter');
}
assert.deepEqual(validateRanges(fields, { ...defaults, createdRange: ['2026-10-21', '2026-10-01'] }), { createdRange: 'order' });
assert.equal(countActive(fields, { ...defaults, createdRange: ['2026-10-21', '2026-10-01'] }), 0, 'a reversed range never counts as an applied filter');
for (const invalidDate of ['2026-02-31', 'not-a-date', '2026-02-29']) {
  for (const range of [[invalidDate, '2026-03-01'], ['2026-02-01', invalidDate]]) {
    const values = { ...defaults, createdRange: range };
    assert.deepEqual(validateRanges(fields, values), { createdRange: 'invalid' }, `${invalidDate} is rejected in either range endpoint`);
    assert.equal(countActive(fields, values), 0, 'invalid calendar dates do not count as active filters');
    assert.equal(countActive(fields, values, true), 0, 'invalid dates do not inflate the advanced filter count');
  }
}
const leapDay = { ...defaults, createdRange: ['2024-02-29', '2024-02-29'] };
assert.deepEqual(validateRanges(fields, leapDay), {}, 'a real leap day is a valid inclusive one-day range');
assert.equal(countActive(fields, leapDay), 1, 'a valid leap-day pair counts as one filter');

assert.deepEqual(validateRanges(fields, { ...defaults, createdRange: ['2026-10-21', '2026-10-21'] }), {}, 'inclusive one-day ranges are valid');
assert.deepEqual(normalize(fields, { ...defaults, createdRange: null }).createdRange, ['', ''], 'missing range normalizes to an empty pair');

const typedFields = [{ id: 'zero' }, { id: 'falseValue', advanced: true }, { id: 'absent' }, { id: 'tags' }];
assert.equal(countActive(typedFields, { zero: 0, falseValue: false, absent: null, tags: [] }), 2, 'zero and false are valid active values; null and empty arrays are not');
assert.equal(countActive(typedFields, { zero: 0, falseValue: false, absent: undefined, tags: [] }, true), 1);
assert.equal(countActive(typedFields, { zero: '', falseValue: null, tags: ['value'] }), 1, 'multi-select counts by field, not option count');

const customFields = [
  { id: 'status', normalize: value => String(value).trim().toLowerCase(), isActive: value => value !== 'all' },
  { id: 'minimum', advanced: true, normalize: Number, isActive: value => value >= 0 }
];
const custom = normalize(customFields, { status: ' ALL ', minimum: '0' });
assert.deepEqual(custom, { status: 'all', minimum: 0 }, 'field adapters own normalization');
assert.equal(countActive(customFields, custom), 1, 'field adapters own activation semantics');
assert.equal(countActive(customFields, custom, true), 1);
assert.deepEqual(validateRanges(customFields, custom), {}, 'range validation does not reinterpret unrelated domain fields');

const ranges = [{ id: 'created', kind: 'range' }, { id: 'updated', kind: 'range', advanced: true }];
assert.deepEqual(validateRanges(ranges, { created: ['', '2026-10-01'], updated: ['2026-10-21', '2026-10-01'] }), { created: 'incomplete', updated: 'order' }, 'validation returns independent errors for all date fields');
console.log('AWTable filters: normalization, active counts, custom semantics and date-range validation passed');
