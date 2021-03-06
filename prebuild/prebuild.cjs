// @ts-check
const { writeFileSync } = require('fs');
const { generateProperty, generatePropertySpec } = require('./property.cjs');
const { generateTuple, generateTupleSpec } = require('./tuple.cjs');

const NUM_PARAMETERS = 22;

writeFileSync('./src/check/property/Property.generated.ts', generateProperty(NUM_PARAMETERS, false));
writeFileSync('./test/unit/check/property/Property.generated.spec.ts', generatePropertySpec(NUM_PARAMETERS, false));

writeFileSync('./src/check/property/AsyncProperty.generated.ts', generateProperty(NUM_PARAMETERS, true));
writeFileSync('./test/unit/check/property/AsyncProperty.generated.spec.ts', generatePropertySpec(NUM_PARAMETERS, true));

writeFileSync('./src/check/arbitrary/TupleArbitrary.generated.ts', generateTuple(NUM_PARAMETERS));
writeFileSync('./test/unit/check/arbitrary/TupleArbitrary.generated.spec.ts', generateTupleSpec(NUM_PARAMETERS));
