# <a href="https://lodash.com/">lodash</a> <span>v3.10.1</span>

<!-- div class="toc-container" -->

<!-- div -->

## `Array`
* <a href="#_chunkarray-size1">`_.chunk`</a>
* <a href="#_compactarray">`_.compact`</a>
* <a href="#_differencearray-values">`_.difference`</a>
* <a href="#_droparray-n1">`_.drop`</a>
* <a href="#_droprightarray-n1">`_.dropRight`</a>
* <a href="#_droprightwhilearray-predicate_identity-thisarg">`_.dropRightWhile`</a>
* <a href="#_dropwhilearray-predicate_identity-thisarg">`_.dropWhile`</a>
* <a href="#_fillarray-value-start0-endarraylength">`_.fill`</a>
* <a href="#_findindexarray-predicate_identity-thisarg">`_.findIndex`</a>
* <a href="#_findlastindexarray-predicate_identity-thisarg">`_.findLastIndex`</a>
* <a href="#_firstarray">`_.first`</a>
* <a href="#_flattenarray-isdeep">`_.flatten`</a>
* <a href="#_flattendeeparray">`_.flattenDeep`</a>
* <a href="#_firstarray" class="alias">`_.head` -> `first`</a>
* <a href="#_indexofarray-value-fromindex0">`_.indexOf`</a>
* <a href="#_initialarray">`_.initial`</a>
* <a href="#_intersectionarrays">`_.intersection`</a>
* <a href="#_lastarray">`_.last`</a>
* <a href="#_lastindexofarray-value-fromindexarraylength-1">`_.lastIndexOf`</a>
* <a href="#_zipobjectprops-values" class="alias">`_.object` -> `zipObject`</a>
* <a href="#_pullarray-values">`_.pull`</a>
* <a href="#_pullatarray-indexes">`_.pullAt`</a>
* <a href="#_removearray-predicate_identity-thisarg">`_.remove`</a>
* <a href="#_restarray">`_.rest`</a>
* <a href="#_slicearray-start0-endarraylength">`_.slice`</a>
* <a href="#_sortedindexarray-value-iteratee_identity-thisarg">`_.sortedIndex`</a>
* <a href="#_sortedlastindexarray-value-iteratee_identity-thisarg">`_.sortedLastIndex`</a>
* <a href="#_restarray" class="alias">`_.tail` -> `rest`</a>
* <a href="#_takearray-n1">`_.take`</a>
* <a href="#_takerightarray-n1">`_.takeRight`</a>
* <a href="#_takerightwhilearray-predicate_identity-thisarg">`_.takeRightWhile`</a>
* <a href="#_takewhilearray-predicate_identity-thisarg">`_.takeWhile`</a>
* <a href="#_unionarrays">`_.union`</a>
* <a href="#_uniqarray-issorted-iteratee-thisarg">`_.uniq`</a>
* <a href="#_uniqarray-issorted-iteratee-thisarg" class="alias">`_.unique` -> `uniq`</a>
* <a href="#_unziparray">`_.unzip`</a>
* <a href="#_unzipwitharray-iteratee-thisarg">`_.unzipWith`</a>
* <a href="#_withoutarray-values">`_.without`</a>
* <a href="#_xorarrays">`_.xor`</a>
* <a href="#_ziparrays">`_.zip`</a>
* <a href="#_zipobjectprops-values">`_.zipObject`</a>
* <a href="#_zipwitharrays-iteratee-thisarg">`_.zipWith`</a>

<!-- /div -->

<!-- div -->

## `Chain`
* <a href="#_value">`_`</a>
* <a href="#_chainvalue">`_.chain`</a>
* <a href="#_tapvalue-interceptor-thisarg">`_.tap`</a>
* <a href="#_thruvalue-interceptor-thisarg">`_.thru`</a>
* <a href="#_prototypechain">`_.prototype.chain`</a>
* <a href="#_prototypecommit">`_.prototype.commit`</a>
* <a href="#_prototypeconcatvalues">`_.prototype.concat`</a>
* <a href="#_prototypeplant">`_.prototype.plant`</a>
* <a href="#_prototypereverse">`_.prototype.reverse`</a>
* <a href="#_prototypevalue" class="alias">`_.prototype.run` -> `value`</a>
* <a href="#_prototypevalue" class="alias">`_.prototype.toJSON` -> `value`</a>
* <a href="#_prototypetostring">`_.prototype.toString`</a>
* <a href="#_prototypevalue">`_.prototype.value`</a>
* <a href="#_prototypevalue" class="alias">`_.prototype.valueOf` -> `value`</a>

<!-- /div -->

<!-- div -->

## `Collection`
* <a href="#_everycollection-predicate_identity-thisarg" class="alias">`_.all` -> `every`</a>
* <a href="#_somecollection-predicate_identity-thisarg" class="alias">`_.any` -> `some`</a>
* <a href="#_atcollection-props">`_.at`</a>
* <a href="#_mapcollection-iteratee_identity-thisarg" class="alias">`_.collect` -> `map`</a>
* <a href="#_includescollection-target-fromindex0" class="alias">`_.contains` -> `includes`</a>
* <a href="#_countbycollection-iteratee_identity-thisarg">`_.countBy`</a>
* <a href="#_findcollection-predicate_identity-thisarg" class="alias">`_.detect` -> `find`</a>
* <a href="#_foreachcollection-iteratee_identity-thisarg" class="alias">`_.each` -> `forEach`</a>
* <a href="#_foreachrightcollection-iteratee_identity-thisarg" class="alias">`_.eachRight` -> `forEachRight`</a>
* <a href="#_everycollection-predicate_identity-thisarg">`_.every`</a>
* <a href="#_filtercollection-predicate_identity-thisarg">`_.filter`</a>
* <a href="#_findcollection-predicate_identity-thisarg">`_.find`</a>
* <a href="#_findlastcollection-predicate_identity-thisarg">`_.findLast`</a>
* <a href="#_findwherecollection-source">`_.findWhere`</a>
* <a href="#_reducecollection-iteratee_identity-accumulator-thisarg" class="alias">`_.foldl` -> `reduce`</a>
* <a href="#_reducerightcollection-iteratee_identity-accumulator-thisarg" class="alias">`_.foldr` -> `reduceRight`</a>
* <a href="#_foreachcollection-iteratee_identity-thisarg">`_.forEach`</a>
* <a href="#_foreachrightcollection-iteratee_identity-thisarg">`_.forEachRight`</a>
* <a href="#_groupbycollection-iteratee_identity-thisarg">`_.groupBy`</a>
* <a href="#_includescollection-target-fromindex0" class="alias">`_.include` -> `includes`</a>
* <a href="#_includescollection-target-fromindex0">`_.includes`</a>
* <a href="#_indexbycollection-iteratee_identity-thisarg">`_.indexBy`</a>
* <a href="#_reducecollection-iteratee_identity-accumulator-thisarg" class="alias">`_.inject` -> `reduce`</a>
* <a href="#_invokecollection-path-args">`_.invoke`</a>
* <a href="#_mapcollection-iteratee_identity-thisarg">`_.map`</a>
* <a href="#_partitioncollection-predicate_identity-thisarg">`_.partition`</a>
* <a href="#_pluckcollection-path">`_.pluck`</a>
* <a href="#_reducecollection-iteratee_identity-accumulator-thisarg">`_.reduce`</a>
* <a href="#_reducerightcollection-iteratee_identity-accumulator-thisarg">`_.reduceRight`</a>
* <a href="#_rejectcollection-predicate_identity-thisarg">`_.reject`</a>
* <a href="#_samplecollection-n">`_.sample`</a>
* <a href="#_filtercollection-predicate_identity-thisarg" class="alias">`_.select` -> `filter`</a>
* <a href="#_shufflecollection">`_.shuffle`</a>
* <a href="#_sizecollection">`_.size`</a>
* <a href="#_somecollection-predicate_identity-thisarg">`_.some`</a>
* <a href="#_sortbycollection-iteratee_identity-thisarg">`_.sortBy`</a>
* <a href="#_sortbyallcollection-iteratees">`_.sortByAll`</a>
* <a href="#_sortbyordercollection-iteratees-orders">`_.sortByOrder`</a>
* <a href="#_wherecollection-source">`_.where`</a>

<!-- /div -->

<!-- div -->

## `Date`
* <a href="#_now">`_.now`</a>

<!-- /div -->

<!-- div -->

## `Function`
* <a href="#_aftern-func">`_.after`</a>
* <a href="#_aryfunc-nfunclength">`_.ary`</a>
* <a href="#_flowrightfuncs" class="alias">`_.backflow` -> `flowRight`</a>
* <a href="#_beforen-func">`_.before`</a>
* <a href="#_bindfunc-thisarg-partials">`_.bind`</a>
* <a href="#_bindallobject-methodnames">`_.bindAll`</a>
* <a href="#_bindkeyobject-key-partials">`_.bindKey`</a>
* <a href="#_flowrightfuncs" class="alias">`_.compose` -> `flowRight`</a>
* <a href="#_curryfunc-arityfunclength">`_.curry`</a>
* <a href="#_curryrightfunc-arityfunclength">`_.curryRight`</a>
* <a href="#_debouncefunc-wait0-options">`_.debounce`</a>
* <a href="#_deferfunc-args">`_.defer`</a>
* <a href="#_delayfunc-wait-args">`_.delay`</a>
* <a href="#_flowfuncs">`_.flow`</a>
* <a href="#_flowrightfuncs">`_.flowRight`</a>
* <a href="#_memoizefunc-resolver">`_.memoize`</a>
* <a href="#_modargsfunc-transforms">`_.modArgs`</a>
* <a href="#_negatepredicate">`_.negate`</a>
* <a href="#_oncefunc">`_.once`</a>
* <a href="#_partialfunc-partials">`_.partial`</a>
* <a href="#_partialrightfunc-partials">`_.partialRight`</a>
* <a href="#_reargfunc-indexes">`_.rearg`</a>
* <a href="#_restparamfunc-startfunclength-1">`_.restParam`</a>
* <a href="#_spreadfunc">`_.spread`</a>
* <a href="#_throttlefunc-wait0-options">`_.throttle`</a>
* <a href="#_wrapvalue-wrapper">`_.wrap`</a>

<!-- /div -->

<!-- div -->

## `Lang`
* <a href="#_clonevalue-isdeep-customizer-thisarg">`_.clone`</a>
* <a href="#_clonedeepvalue-customizer-thisarg">`_.cloneDeep`</a>
* <a href="#_isequalvalue-other-customizer-thisarg" class="alias">`_.eq` -> `isEqual`</a>
* <a href="#_gtvalue-other">`_.gt`</a>
* <a href="#_gtevalue-other">`_.gte`</a>
* <a href="#_isargumentsvalue">`_.isArguments`</a>
* <a href="#_isarrayvalue">`_.isArray`</a>
* <a href="#_isbooleanvalue">`_.isBoolean`</a>
* <a href="#_isdatevalue">`_.isDate`</a>
* <a href="#_iselementvalue">`_.isElement`</a>
* <a href="#_isemptyvalue">`_.isEmpty`</a>
* <a href="#_isequalvalue-other-customizer-thisarg">`_.isEqual`</a>
* <a href="#_iserrorvalue">`_.isError`</a>
* <a href="#_isfinitevalue">`_.isFinite`</a>
* <a href="#_isfunctionvalue">`_.isFunction`</a>
* <a href="#_ismatchobject-source-customizer-thisarg">`_.isMatch`</a>
* <a href="#_isnanvalue">`_.isNaN`</a>
* <a href="#_isnativevalue">`_.isNative`</a>
* <a href="#_isnullvalue">`_.isNull`</a>
* <a href="#_isnumbervalue">`_.isNumber`</a>
* <a href="#_isobjectvalue">`_.isObject`</a>
* <a href="#_isplainobjectvalue">`_.isPlainObject`</a>
* <a href="#_isregexpvalue">`_.isRegExp`</a>
* <a href="#_isstringvalue">`_.isString`</a>
* <a href="#_istypedarrayvalue">`_.isTypedArray`</a>
* <a href="#_isundefinedvalue">`_.isUndefined`</a>
* <a href="#_ltvalue-other">`_.lt`</a>
* <a href="#_ltevalue-other">`_.lte`</a>
* <a href="#_toarrayvalue">`_.toArray`</a>
* <a href="#_toplainobjectvalue">`_.toPlainObject`</a>

<!-- /div -->

<!-- div -->

## `Math`
* <a href="#_addaugend-addend">`_.add`</a>
* <a href="#_ceiln-precision0">`_.ceil`</a>
* <a href="#_floorn-precision0">`_.floor`</a>
* <a href="#_maxcollection-iteratee-thisarg">`_.max`</a>
* <a href="#_mincollection-iteratee-thisarg">`_.min`</a>
* <a href="#_roundn-precision0">`_.round`</a>
* <a href="#_sumcollection-iteratee-thisarg">`_.sum`</a>

<!-- /div -->

<!-- div -->

## `Number`
* <a href="#_inrangen-start0-end">`_.inRange`</a>
* <a href="#_randommin0-max1-floating">`_.random`</a>

<!-- /div -->

<!-- div -->

## `Object`
* <a href="#_assignobject-sources-customizer-thisarg">`_.assign`</a>
* <a href="#_createprototype-properties">`_.create`</a>
* <a href="#_defaultsobject-sources">`_.defaults`</a>
* <a href="#_defaultsdeepobject-sources">`_.defaultsDeep`</a>
* <a href="#_assignobject-sources-customizer-thisarg" class="alias">`_.extend` -> `assign`</a>
* <a href="#_findkeyobject-predicate_identity-thisarg">`_.findKey`</a>
* <a href="#_findlastkeyobject-predicate_identity-thisarg">`_.findLastKey`</a>
* <a href="#_forinobject-iteratee_identity-thisarg">`_.forIn`</a>
* <a href="#_forinrightobject-iteratee_identity-thisarg">`_.forInRight`</a>
* <a href="#_forownobject-iteratee_identity-thisarg">`_.forOwn`</a>
* <a href="#_forownrightobject-iteratee_identity-thisarg">`_.forOwnRight`</a>
* <a href="#_functionsobject">`_.functions`</a>
* <a href="#_getobject-path-defaultvalue">`_.get`</a>
* <a href="#_hasobject-path">`_.has`</a>
* <a href="#_invertobject-multivalue">`_.invert`</a>
* <a href="#_keysobject">`_.keys`</a>
* <a href="#_keysinobject">`_.keysIn`</a>
* <a href="#_mapkeysobject-iteratee_identity-thisarg">`_.mapKeys`</a>
* <a href="#_mapvaluesobject-iteratee_identity-thisarg">`_.mapValues`</a>
* <a href="#_mergeobject-sources-customizer-thisarg">`_.merge`</a>
* <a href="#_functionsobject" class="alias">`_.methods` -> `functions`</a>
* <a href="#_omitobject-predicate-thisarg">`_.omit`</a>
* <a href="#_pairsobject">`_.pairs`</a>
* <a href="#_pickobject-predicate-thisarg">`_.pick`</a>
* <a href="#_resultobject-path-defaultvalue">`_.result`</a>
* <a href="#_setobject-path-value">`_.set`</a>
* <a href="#_transformobject-iteratee_identity-accumulator-thisarg">`_.transform`</a>
* <a href="#_valuesobject">`_.values`</a>
* <a href="#_valuesinobject">`_.valuesIn`</a>

<!-- /div -->

<!-- div -->

## `String`
* <a href="#_camelcasestring">`_.camelCase`</a>
* <a href="#_capitalizestring">`_.capitalize`</a>
* <a href="#_deburrstring">`_.deburr`</a>
* <a href="#_endswithstring-target-positionstringlength">`_.endsWith`</a>
* <a href="#_escapestring">`_.escape`</a>
* <a href="#_escaperegexpstring">`_.escapeRegExp`</a>
* <a href="#_kebabcasestring">`_.kebabCase`</a>
* <a href="#_padstring-length0-chars">`_.pad`</a>
* <a href="#_padleftstring-length0-chars">`_.padLeft`</a>
* <a href="#_padrightstring-length0-chars">`_.padRight`</a>
* <a href="#_parseintstring-radix">`_.parseInt`</a>
* <a href="#_repeatstring-n0">`_.repeat`</a>
* <a href="#_snakecasestring">`_.snakeCase`</a>
* <a href="#_startcasestring">`_.startCase`</a>
* <a href="#_startswithstring-target-position0">`_.startsWith`</a>
* <a href="#_templatestring-options">`_.template`</a>
* <a href="#_trimstring-charswhitespace">`_.trim`</a>
* <a href="#_trimleftstring-charswhitespace">`_.trimLeft`</a>
* <a href="#_trimrightstring-charswhitespace">`_.trimRight`</a>
* <a href="#_truncstring-options-optionslength30-optionsomission-optionsseparator">`_.trunc`</a>
* <a href="#_unescapestring">`_.unescape`</a>
* <a href="#_wordsstring-pattern">`_.words`</a>

<!-- /div -->

<!-- div -->

## `Utility`
* <a href="#_attemptfunc">`_.attempt`</a>
* <a href="#_callbackfunc_identity-thisarg">`_.callback`</a>
* <a href="#_constantvalue">`_.constant`</a>
* <a href="#_identityvalue">`_.identity`</a>
* <a href="#_callbackfunc_identity-thisarg" class="alias">`_.iteratee` -> `callback`</a>
* <a href="#_matchessource">`_.matches`</a>
* <a href="#_matchespropertypath-srcvalue">`_.matchesProperty`</a>
* <a href="#_methodpath-args">`_.method`</a>
* <a href="#_methodofobject-args">`_.methodOf`</a>
* <a href="#_mixinobjectlodash-source-options">`_.mixin`</a>
* <a href="#_noconflict">`_.noConflict`</a>
* <a href="#_noop">`_.noop`</a>
* <a href="#_propertypath">`_.property`</a>
* <a href="#_propertyofobject">`_.propertyOf`</a>
* <a href="#_rangestart0-end-step1">`_.range`</a>
* <a href="#_runincontextcontextroot">`_.runInContext`</a>
* <a href="#_timesn-iteratee_identity-thisarg">`_.times`</a>
* <a href="#_uniqueidprefix">`_.uniqueId`</a>

<!-- /div -->

<!-- div -->

## `Methods`
* <a href="#_templatesettingsimports_">`_.templateSettings.imports._`</a>

<!-- /div -->

<!-- div -->

## `Properties`
* <a href="#_version">`_.VERSION`</a>
* <a href="#_support">`_.support`</a>
* <a href="#_supportenumerrorprops">`_.support.enumErrorProps`</a>
* <a href="#_supportenumprototypes">`_.support.enumPrototypes`</a>
* <a href="#_supportnonenumshadows">`_.support.nonEnumShadows`</a>
* <a href="#_supportownlast">`_.support.ownLast`</a>
* <a href="#_supportspliceobjects">`_.support.spliceObjects`</a>
* <a href="#_supportunindexedchars">`_.support.unindexedChars`</a>
* <a href="#_templatesettings">`_.templateSettings`</a>
* <a href="#_templatesettingsescape">`_.templateSettings.escape`</a>
* <a href="#_templatesettingsevaluate">`_.templateSettings.evaluate`</a>
* <a href="#_templatesettingsimports">`_.templateSettings.imports`</a>
* <a href="#_templatesettingsinterpolate">`_.templateSettings.interpolate`</a>
* <a href="#_templatesettingsvariable">`_.templateSettings.variable`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `“Array” Methods`

<!-- div -->

### <a id="_chunkarray-size1"></a>`_.chunk(array, [size=1])`
<a href="#_chunkarray-size1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4624 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.chunk "See the npm package")

创建一个新的数组，将原先数组中数据按照给定的大小进行分块，并返回之。
如果 `原数组` 最后的一个数据块的大小小于指定大小，最后那个数据块将会被保留（请看下文的例子）

#### 参数
1. `array` *(Array)*: 需要进行分割的数组
2. `[size=1]` *(number)*: 每块需要需要分割的大小

#### 返回值
*(Array)*:  返回一个包含所有分割块的新的数组.

#### 示例
```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_compactarray"></a>`_.compact(array)`
<a href="#_compactarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4655 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.compact "See the npm package")

返回一个剔除所有非真值的新数组.  `false`, `null`,
`0`, `""`, `undefined`, 和 `NaN` 都是非真值.

#### 参数
1. `array` *(Array)*: 需要进行处理的数组.

#### 返回值
*(Array)*:  返回剔除假值后的新数组.

#### 示例
```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_differencearray-values"></a>`_.difference(array, [values])`
<a href="#_differencearray-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4686 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.difference "See the npm package")

创建一个差异 `数组` 不包含使用 [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) 方法所提供的数组.

#### 参数
1. `array` *(Array)*: 需要进行检查的数组.
2. `[values]` *(...Array)*: 需要进行排除的数组.

#### 返回值
*(Array)*:  返回一个经筛选后的新数组.

#### 示例
```js
_.difference([1, 2, 3], [4, 2]);
// => [1, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_droparray-n1"></a>`_.drop(array, [n=1])`
<a href="#_droparray-n1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4716 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.drop "See the npm package")

根据提供的参数 `n` 从起始端对 `数组` 内元素进行丢弃操作.

#### 参数
1. `array` *(Array)*: 需要进行处理的数组.
2. `[n=1]` *(number)*: 需要丢弃的元素个数.

#### 返回值
*(Array)*:  返回丢弃操作后新的数组.

#### 示例
```js
_.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_droprightarray-n1"></a>`_.dropRight(array, [n=1])`
<a href="#_droprightarray-n1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4751 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.dropright "See the npm package")

根据所提供的参数 `n` 对 `数组` 从尾端元素开始进行丢弃操作.

#### 参数
1. `array` *(Array)*: 需要进行处理的数组.
2. `[n=1]` *(number)*: 需要进行丢弃的元素个数.

#### 返回值
*(Array)*:  返回丢弃操作后新的数组.

#### 示例
```js
_.dropRight([1, 2, 3]);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_droprightwhilearray-predicate_identity-thisarg"></a>`_.dropRightWhile(array, [predicate=_.identity], [thisArg])`
<a href="#_droprightwhilearray-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4812 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.droprightwhile "See the npm package")

创建一个从尾端元素进行裁剪后的 `数组`. 数组中元素的丢弃操作直到 `断言(predicate)` 的结果为假值.
断言限定 `thisArg` 并且调用的同时传递三个参数(value,index,array).
<br>
<br>
如果为 `断言` 提供的是属性名称,则自动创建 `_.property` 的回调函数，并作为断言依据.
<br>
<br>
如果也提供了 `thisArg` 参数 ，则自动创建 `_.matchesProperty` 的回调函数，并根据回调结果作为断言依据.
<br>
<br>
如果为 `断言` 提供的是对象,则自动创建 `_.matches` 的回调函数，并根据回调结果作为断言依据.

#### 参数
1. `array` *(Array)*: 需要处理的数组.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*:  `this` 绑定 `predicate`.

#### 返回值
*(Array)*:  返回丢弃操作后的 `数组`.

#### 示例
```js
_.dropRightWhile([1, 2, 3], function(n) {
  return n > 1;
});
// => [1]

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

// using the `_.matches` callback shorthand
_.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
// => ['barney', 'fred']

// using the `_.matchesProperty` callback shorthand
_.pluck(_.dropRightWhile(users, 'active', false), 'user');
// => ['barney']

// using the `_.property` callback shorthand
_.pluck(_.dropRightWhile(users, 'active'), 'user');
// => ['barney', 'fred', 'pebbles']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_dropwhilearray-predicate_identity-thisarg"></a>`_.dropWhile(array, [predicate=_.identity], [thisArg])`
<a href="#_dropwhilearray-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4867 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.dropwhile "See the npm package")

创建一个从起始元素进行裁剪操作的 `数组` . 数组中元素的丢弃直到 `断言` 返回假值为止.
断言限定 `thisArg` 并且调用的同时传递三个参数(value,index,array).
<br>
<br>
如果为 `断言` 提供的是属性名称,则自动创建 `_.property` 的回调函数，并作为断言依据.
<br>
<br>
如果也提供了 `thisArg` 参数 ，则自动创建 `_.matchesProperty` 的回调函数，并根据回调结果作为断言依据.
<br>
<br>
如果为 `断言` 提供的是对象,则自动创建 `_.matches` 的回调函数，并根据回调结果作为断言依据.

#### 参数
1. `array` *(Array)*: 需要进行处理的数组 .
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: `this` 绑定 `predicate`.

#### 返回值
*(Array)*:  返回丢弃操作后的数组.

#### 示例
```js
_.dropWhile([1, 2, 3], func	tion(n) {
  return n < 3;
});
// => [3]

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

// using the `_.matches` callback shorthand
_.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
// => ['fred', 'pebbles']

// using the `_.matchesProperty` callback shorthand
_.pluck(_.dropWhile(users, 'active', false), 'user');
// => ['pebbles']

// using the `_.property` callback shorthand
_.pluck(_.dropWhile(users, 'active'), 'user');
// => ['barney', 'fred', 'pebbles']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_fillarray-value-start0-endarraylength"></a>`_.fill(array, value, [start=0], [end=array.length])`
<a href="#_fillarray-value-start0-endarraylength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4901 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.fill "See the npm package")

根据指定 `值` 进行数组填充操作. 允许提供 `起始索引` 和 `结束索引` 参数，但是填充不包含 `结束索引`.
<br>
<br>
**Note:** This method mutates `array`.

#### 参数
1. `array` *(Array)*: 待填充的数组.
2. `value` *(&#42;)*: 需要填充到数组的值.
3. `[start=0]` *(number)*:  起始索引.
4. `[end=array.length]` *(number)*: 结束索引.

#### 返回值
*(Array)*:  返回填充后的数组.

#### 示例
```js
var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

_.fill([4, 6, 8], '*', 1, 2);
// => [4, '*', 8]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findindexarray-predicate_identity-thisarg"></a>`_.findIndex(array, [predicate=_.identity], [thisArg])`
<a href="#_findindexarray-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L4961 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findindex "See the npm package")

该方法类似于 `_.find` 只不过它返回的索引是 `断言` 为真的索引 而非 元素本身为真的索引.
<br>
<br>

如果为 `断言` 提供的是属性名称,则自动创建 `_.property` 回调函数，并将回调结果作为断言依据.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_.matchesProperty` 回调函数,并将回调结果作为断言依据.
<br>
<br>
如果为 `断言` 提供的是一个对象,则自动创建 `_.matches` 回调函数,并将回调结果作为断言依据.

#### 参数
1. `array` *(Array)*: 需要进行检索的数组.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(number)*:  如果检索到元素则返回元素索引, 否则返回 `-1`.

#### 示例
```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findIndex(users, function(chr) {
  return chr.user == 'barney';
});
// => 0

// using the `_.matches` callback shorthand
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1

// using the `_.matchesProperty` callback shorthand
_.findIndex(users, 'active', false);
// => 0

// using the `_.property` callback shorthand
_.findIndex(users, 'active');
// => 2
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findlastindexarray-predicate_identity-thisarg"></a>`_.findLastIndex(array, [predicate=_.identity], [thisArg])`
<a href="#_findlastindexarray-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5011 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findlastindex "See the npm package")

该方法类似于 `_.findIndex` 只不过迭代器的检索方向是从 `集合` 的右到左.
<br>
<br>

如果为 `断言` 提供的是属性名称,则自动创建 `_.property` 回调函数，并将回调结果作为断言依据.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_.matchesProperty` 回调函数,并将回调结果作为断言依据.
<br>
<br>
如果为 `断言` 提供的是一个对象,则自动创建 `_.matches` 回调函数,并将回调结果作为断言依据.

#### 参数
1. `array` *(Array)*: 待检索的数组 .
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(number)*: 返回检索到的元素的索引值,否则返回 `-1`. 

#### 示例
```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

_.findLastIndex(users, function(chr) {
  return chr.user == 'pebbles';
});
// => 2

// using the `_.matches` callback shorthand
_.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0

// using the `_.matchesProperty` callback shorthand
_.findLastIndex(users, 'active', false);
// => 2

// using the `_.property` callback shorthand
_.findLastIndex(users, 'active');
// => 0
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_firstarray"></a>`_.first(array)`
<a href="#_firstarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5030 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.first "See the npm package")

返回 `数组` 的第一个元素

#### Aliases
*_.head*

#### 参数
1. `array` *(Array)*: 待处理的数组.

#### 返回值
*(&#42;)*: 返回数组的第一元素. 

#### 示例
```js
_.first([1, 2, 3]);
// => 1

_.first([]);
// => undefined
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flattenarray-isdeep"></a>`_.flatten(array, [isDeep])`
<a href="#_flattenarray-isdeep">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5054 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flatten "See the npm package")

展平嵌套的数组. 如果参数 `isDeep` 为 `true`, 将会触发递归展平操作直到返回一维数组.

#### 参数
1. `array` *(Array)*: 待展平的数组. 
2. `[isDeep]` *(boolean)*: 是否深入展平.

#### 返回值
*(Array)*: 返回展平后的数组.

#### 示例
```js
_.flatten([1, [2, 3, [4]]]);
// => [1, 2, 3, [4]]

// using `isDeep`
_.flatten([1, [2, 3, [4]]], true);
// => [1, 2, 3, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flattendeeparray"></a>`_.flattenDeep(array)`
<a href="#_flattendeeparray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5075 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flattendeep "See the npm package")

递归展平数组.

#### 参数
1. `array` *(Array)*: 待递归展平的数组. 

#### 返回值
*(Array)*: 返回展平后的数组.

#### 示例
```js
_.flattenDeep([1, [2, 3, [4]]]);
// => [1, 2, 3, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_indexofarray-value-fromindex0"></a>`_.indexOf(array, value, [fromIndex=0])`
<a href="#_indexofarray-value-fromindex0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5108 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.indexof "See the npm package")

根据 `value` 使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)等值比较返回数组中首次匹配的索引值,
如果 `fromIndex` 为负值,将从数组尾端索引进行匹配, 如果将 `fromIndex` 设置为 `true`,将使用更快的二进制检索机制.

#### 参数
1. `array` *(Array)*: 待检索的数组.
2. `value` *(&#42;)*: 需要检索的值. 
3. `[fromIndex=0]` *(boolean|number)*: 需要检索的索引起始值,如果为 `true` 将使用二进制检索方式. 

#### 返回值
*(number)*: 返回检索到元素的索引值,否则返回 `-1`. 

#### 示例
```js
_.indexOf([1, 2, 1, 2], 2);
// => 1

// using `fromIndex`
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3

// performing a binary search
_.indexOf([1, 1, 2, 2], 2, true);
// => 2
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_initialarray"></a>`_.initial(array)`
<a href="#_initialarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5139 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.initial "See the npm package")

返回数组中所有元素但剔除掉最后一个元素.

#### 参数
1. `array` *(Array)*: 待处理的数组.

#### 返回值
*(Array)*: 返回剔除掉最后一个元素后的数组. 

#### 示例
```js
_.initial([1, 2, 3]);
// => [1, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_intersectionarrays"></a>`_.intersection([arrays])`
<a href="#_intersectionarrays">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5157 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.intersection "See the npm package")

创建一个包含所有使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)进行等值比较所筛选后的唯一值数组.

#### 参数
1. `[arrays]` *(...Array)*: 带检察的数组队列. 

#### 返回值
*(Array)*:  返回队列中所有数组共享元素的新数组.

#### 示例
```js
_.intersection([1, 2], [4, 2], [2, 1]);
// => [2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_lastarray"></a>`_.last(array)`
<a href="#_lastarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5207 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.last "See the npm package")

返回数组中最后一个元素.

#### 参数
1. `array` *(Array)*: 待检索的数组.

#### 返回值
*(&#42;)*:  返回数组中最后一个元素.

#### 示例
```js
_.last([1, 2, 3]);
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_lastindexofarray-value-fromindexarraylength-1"></a>`_.lastIndexOf(array, value, [fromIndex=array.length-1])`
<a href="#_lastindexofarray-value-fromindexarraylength-1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5237 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.lastindexof "See the npm package")

该函数类似于 `_.indexOf` 只不过迭代器处理元素的方式是从右向左.

#### 参数
1. `array` *(Array)*: 待检索的数组.
2. `value` *(&#42;)*: 需要检索的值.
3. `[fromIndex=array.length-1]` *(boolean|number)*: 如果 `fromIndex` 的值为 `true` 则进行二进制检索方式.

#### 返回值
*(number)*: 返回检索到元素的索引，否则返回 `-1`.

#### 示例
```js
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3

// using `fromIndex`
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1

// performing a binary search
_.lastIndexOf([1, 1, 2, 2], 2, true);
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pullarray-values"></a>`_.pull(array, [values])`
<a href="#_pullarray-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5285 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pull "See the npm package")

从 `数组` 中删除所有使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)进行等值比较为真的 `value	`.
<br>
<br>
**Note:** 不像 `_.without`,该方法会改变原有 `数组`.

#### 参数
1. `array` *(Array)*: 待修改的数组.
2. `[values]` *(...&#42;)*: 需要删除的值列.

#### 返回值
*(Array)*:  返回修改后的原数组.

#### 示例
```js
var array = [1, 2, 3, 1, 2, 3];

_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pullatarray-indexes"></a>`_.pullAt(array, [indexes])`
<a href="#_pullatarray-indexes">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5332 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pullat "See the npm package")

从数组中剔除所提供的索引相对应的元素,并返回所剔除元素的集合.
索引参数可以是特殊的数组队列,也可以是个别的单个或多个参数.
<br>
<br>
**Note:** 不像 `_.at`,该方法改变原有 `数组`.

#### 参数
1. `array` *(Array)*: 待修改的数组.
2. `[indexes]` *(...(number|number&#91;&#93;)*: 索引参数可以是特殊的数组队列,也可以是个别的单个或多个参数.

#### 返回值
*(Array)*:  返回所剔除元素集合的数组.

#### 示例
```js
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);

console.log(array);
// => [5, 15]

console.log(evens);
// => [10, 20]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_removearray-predicate_identity-thisarg"></a>`_.remove(array, [predicate=_.identity], [thisArg])`
<a href="#_removearray-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5379 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.remove "See the npm package")

剔除 `数组` 中所有经 `断言` 为真的元素,并返回所剔除元素的集合.断言限定 `thisArg` 并在调用时传递三个参数:(value,index,array).
<br>
<br>
如果为 `断言` 提供的是属性名称,则自动创建 `_.property` 的回调函数，并作为断言依据.
<br>
<br>
如果也提供了 `thisArg` 参数 ，则自动创建 `_.matchesProperty` 的回调函数，并根据回调结果作为断言依据.
<br>
<br>
如果为 `断言` 提供的是对象,则自动创建 `_.matches` 的回调函数，并根据回调结果作为断言依据.
<br>
<br>
**Note:** 不像 `_.filter`,该方法改变原有 `数组`.

#### 参数
1. `array` *(Array)*: 待修改的数组.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回所剔除元素组成的数组.

#### 示例
```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_restarray"></a>`_.rest(array)`
<a href="#_restarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5414 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.rest "See the npm package")

返回剔除首个元素后的 `数组`.

#### Aliases
*_.tail*

#### 参数
1. `array` *(Array)*: 待处理的数组.

#### 返回值
*(Array)*: 返回裁剪的数组. 

#### 示例
```js
_.rest([1, 2, 3]);
// => [2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_slicearray-start0-endarraylength"></a>`_.slice(array, [start=0], [end=array.length])`
<a href="#_slicearray-start0-endarraylength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5432 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.slice "See the npm package")

根据 `起始索引` 和 `结束索引` 对数组进行裁剪,返回裁剪后的数组但不包括 `结束索引`. 
<br>
<br>
**Note:** 该方法用来替代 `Array#slice` 来支持 IE < 9 中的节点列表以确保数组的正确返回.

#### 参数
1. `array` *(Array)*: 待裁剪的数组.
2. `[start=0]` *(number)*: 起始索引 .
3. `[end=array.length]` *(number)*: 结束索引.

#### 返回值
*(Array)*:  返回裁剪后的数组.

* * *

<!-- /div -->

<!-- div -->

### <a id="_sortedindexarray-value-iteratee_identity-thisarg"></a>`_.sortedIndex(array, value, [iteratee=_.identity], [thisArg])`
<a href="#_sortedindexarray-value-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5492 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortedindex "See the npm package")

使用二进制检索方式来判断 `value` 应该插入在数组中的位置,它的索引应该尽可能的最低以保证数组的排序.
如果提供了迭代器方法,则迭代器调用时会遍历 `数组` 中的每个 `元素` 去计算它们的排序顺序.
迭代器限定 `thisArg` 参数并在调用时传递唯一参数:(value).
<br>
<br>
如果为 `迭代器` 提供的是属性名称,则自动创建 `_.property` 回调函数,该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_.matchesProperty` 回调函数,如果该函数匹配到元素值,则返回 `true` , 否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象,则自动创建 `_.matches` 回调函数,如果该函数匹配到该对象的所有属性,则返回 `true`, 否则返回 `false`.

#### 参数
1. `array` *(Array)*: 待检察的已排序数组.
2. `value` *(&#42;)*: 待评估的值.
3. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
4. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(number)*: 返回 `value` 应该在 `数组` 中应插入的索引. 
#### 示例
```js
_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 4, 5, 5], 5);
// => 2

var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };

// using an iteratee function
_.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
  return this.data[word];
}, dict);
// => 1

// using the `_.property` callback shorthand
_.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
// => 1
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortedlastindexarray-value-iteratee_identity-thisarg"></a>`_.sortedLastIndex(array, value, [iteratee=_.identity], [thisArg])`
<a href="#_sortedlastindexarray-value-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5514 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortedlastindex "See the npm package")

该方法类似于 `_.sortedIndex` 只不过它返回的是在 `数值` 中应替换元素尽可能高的索引.

#### 参数
1. `array` *(Array)*: 待检察的已排序数组.
2. `value` *(&#42;)*: 待评估的值.
3. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
4. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(number)*: 返回 `value` 应在数组中插入位置的索引值.  
#### 示例
```js
_.sortedLastIndex([4, 4, 5, 5], 5);
// => 4
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_takearray-n1"></a>`_.take(array, [n=1])`
<a href="#_takearray-n1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5540 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.take "See the npm package")

从 `数组` 的起始元素开始提取 `n` 个元素.

#### 参数
1. `array` *(Array)*: 待处理的数组.
2. `[n=1]` *(number)*: 需要提取的元素个数.

#### 返回值
*(Array)*:  返回提取的元素组成的数组.

#### 示例
```js
_.take([1, 2, 3]);
// => [1]

_.take([1, 2, 3], 2);
// => [1, 2]

_.take([1, 2, 3], 5);
// => [1, 2, 3]

_.take([1, 2, 3], 0);
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_takerightarray-n1"></a>`_.takeRight(array, [n=1])`
<a href="#_takerightarray-n1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5575 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.takeright "See the npm package")

从 `数组` 的尾端开始提取 `n` 个元素.

#### 参数
1. `array` *(Array)*: 待处理的数组.
2. `[n=1]` *(number)*: 需要提取的元素个数.

#### 返回值
*(Array)*:   返回提取的元素组成的数组.

#### 示例
```js
_.takeRight([1, 2, 3]);
// => [3]

_.takeRight([1, 2, 3], 2);
// => [2, 3]

_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]

_.takeRight([1, 2, 3], 0);
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_takerightwhilearray-predicate_identity-thisarg"></a>`_.takeRightWhile(array, [predicate=_.identity], [thisArg])`
<a href="#_takerightwhilearray-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5636 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.takerightwhile "See the npm package")

从 `数组` 尾端开始提取元素,元素的提取直到 `断言` 返回假值为止.
断言限定 `thisArg` 参数,并在调用时传递三个参数:(value,index,array).
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `array` *(Array)*: 待处理的数组.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回提取的元素组成的数组.

#### 示例
```js
_.takeRightWhile([1, 2, 3], function(n) {
  return n > 1;
});
// => [2, 3]

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

// using the `_.matches` callback shorthand
_.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
// => ['pebbles']

// using the `_.matchesProperty` callback shorthand
_.pluck(_.takeRightWhile(users, 'active', false), 'user');
// => ['fred', 'pebbles']

// using the `_.property` callback shorthand
_.pluck(_.takeRightWhile(users, 'active'), 'user');
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_takewhilearray-predicate_identity-thisarg"></a>`_.takeWhile(array, [predicate=_.identity], [thisArg])`
<a href="#_takewhilearray-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5691 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.takewhile "See the npm package")

从 `数组` 的起始端开始提取元素直到 `断言` 返回假值为止.
断言限定 `thisArg` 参数,并在被调用时传递三个参数:(value,index,array).
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `array` *(Array)*: 待处理的数组.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回提取的元素所组成的数组.

#### 示例
```js
_.takeWhile([1, 2, 3], function(n) {
  return n < 3;
});
// => [1, 2]

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false},
  { 'user': 'pebbles', 'active': true }
];

// using the `_.matches` callback shorthand
_.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
// => ['barney']

// using the `_.matchesProperty` callback shorthand
_.pluck(_.takeWhile(users, 'active', false), 'user');
// => ['barney', 'fred']

// using the `_.property` callback shorthand
_.pluck(_.takeWhile(users, 'active'), 'user');
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unionarrays"></a>`_.union([arrays])`
<a href="#_unionarrays">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5712 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.union "See the npm package")

创建唯一值所组成的数组.所有被提供的数组使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
进行等值比较.

#### 参数
1. `[arrays]` *(...Array)*: 待检察的数组队列.

#### 返回值
*(Array)*: 返回去重后所组成的新数组. 
#### 示例
```js
_.union([1, 2], [4, 2], [2, 1]);
// => [1, 2, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_uniqarray-issorted-iteratee-thisarg"></a>`_.uniq(array, [isSorted], [iteratee], [thisArg])`
<a href="#_uniqarray-issorted-iteratee-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5765 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.uniq "See the npm package")

创建一个数组副本,并使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)进行等值比较,
只有首次出现的元素才会被保留.如果 `isSorted` 元素值为 `true` 将使用更快的检索方式.
如果提供了 `迭代器` ，则迭代器返回的结果将会被视作检索依据. `迭代器` 限定 `thisArg` 参数,
并且被调用时传递三个参数:(value,index,array).
<br>
<br>
如果为 `迭代器` 提供的是属性名称,则自动创建 `_.property` 回调函数,该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_.matchesProperty` 回调函数,如果该函数匹配到元素值,则返回 `true` , 否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象,则自动创建 `_.matches` 回调函数,如果该函数匹配到该对象的所有属性,则返回 `true`, 否则返回 `false`.

#### Aliases
*_.unique*

#### 参数
1. `array` *(Array)*: 待检察的数组.
2. `[isSorted]` *(boolean)*: 指定数组是否已排序.
3. `[iteratee]` *(Function|Object|string)*: 每次迭代调用的函数.
4. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回一个新的无重复值的数组.

#### 示例
```js
_.uniq([2, 1, 2]);
// => [2, 1]

// using `isSorted`
_.uniq([1, 1, 2], true);
// => [1, 2]

// using an iteratee function
_.uniq([1, 2.5, 1.5, 2], function(n) {
  return this.floor(n);
}, Math);
// => [1, 2.5]

// using the `_.property` callback shorthand
_.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unziparray"></a>`_.unzip(array)`
<a href="#_unziparray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5802 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unzip "See the npm package")

该方法类似于 `_.zip` 只不过它接收一个打包后的数组并且创建一个新的数组，新的数组重组元素打包前的状态.

#### 参数
1. `array` *(Array)*: 待分解的已打包的数组.

#### 返回值
*(Array)*:  返回一个拆分后的元素数组.

#### 示例
```js
var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]

_.unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unzipwitharray-iteratee-thisarg"></a>`_.unzipWith(array, [iteratee], [thisArg])`
<a href="#_unzipwitharray-iteratee-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5842 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unzipwith "See the npm package")

该方法类似于 `_.unzip` 只不过它也可以额外接收一个 `迭代器` 来决定分解后的数组如何重组.
`迭代器` 限定 `thisArg` 参数,并在被调用时传递参数:(accumulator, value, index, group).

#### 参数
1. `array` *(Array)*: 待处理已打包的数组.
2. `[iteratee]` *(Function)*: 决定如果重组分解后元素的方法.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回包含拆解后元素组成的数组.

#### 示例
```js
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]

_.unzipWith(zipped, _.add);
// => [3, 30, 300]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_withoutarray-values"></a>`_.without(array, [values])`
<a href="#_withoutarray-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5873 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.without "See the npm package")

创建一个排除所有提供参数的数组.使用[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)进行等值比较.

#### 参数
1. `array` *(Array)*: 待过滤的数组 .
2. `[values]` *(...&#42;)*: 需要过滤的数据.

#### 返回值
*(Array)*:  返回过滤后的数组.

#### 示例
```js
_.without([1, 2, 1, 3], 1, 2);
// => [3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_xorarrays"></a>`_.xor([arrays])`
<a href="#_xorarrays">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5893 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.xor "See the npm package")

创建一个包含所有唯一值的数组.使用[symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)等值比较所提供的数组.

#### 参数
1. `[arrays]` *(...Array)*: 待检察的数组.

#### 返回值
*(Array)*:  返回包含所有唯一值的新数组.

#### 示例
```js
_.xor([1, 2], [4, 2]);
// => [1, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ziparrays"></a>`_.zip([arrays])`
<a href="#_ziparrays">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5923 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.zip "See the npm package")

创建一个打包所有元素后的数组.打包后返回的数组元素结构如下:
1. 第 1 个元素 包含所有提供数组的第 1 个元素.
2. 第 2 个元素 包含所有提供数组的第 2 个元素.
3. ...

#### 参数
1. `[arrays]` *(...Array)*: 待打包数组队列.

#### 返回值
*(Array)*:  返回打包后的数组.

#### 示例
```js
_.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_zipobjectprops-values"></a>`_.zipObject(props, [values=[]])`
<a href="#_zipobjectprops-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5946 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.zipobject "See the npm package")

该方法与 `_.pairs` 相反,它返回一个由数组转换而来的对象.该方法提供两种转换方式.当参数为一个数组 `[[key1, value1], [key2, value2]]` 
或者两个数组 `[key1,key2],[value1,value2]`, 返回对象 `{key1: value1, key2: value2}`. 

#### Aliases
*_.object*

#### 参数
1. `props` *(Array)*: 对象的属性所组成的数组.
2. `[values=[]]` *(Array)*: 对象的属性值所组成的数组.

#### 返回值
*(Object)*:  返回一个新的对象.

#### 示例
```js
_.zipObject([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }

_.zipObject(['fred', 'barney'], [30, 40]);
// => { 'fred': 30, 'barney': 40 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_zipwitharrays-iteratee-thisarg"></a>`_.zipWith([arrays], [iteratee], [thisArg])`
<a href="#_zipwitharrays-iteratee-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L5982 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.zipwith "See the npm package")

该方法类似 `_.zip` 只不过它也可以接收一个 `迭代器` 来决定打包后的元素如何进行重组.
`迭代器` 限定 `thisArg` 并在被调用时传递四个参数: (accumulator, value, index, group).

#### 参数
1. `[arrays]` *(...Array)*: 待处理的数组.
2. `[iteratee]` *(Function)*: 需要处理打包后元素的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回打包后元素所组成的数组.

#### 示例
```js
_.zipWith([1, 2], [10, 20], [100, 200], _.add);
// => [111, 222]
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Chain” Methods`

<!-- div -->

### <a id="_value"></a>`_(value)`
<a href="#_value">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L944 "View in source") [&#x24C9;][1]

创建一个经 `lodash` 包装后的对象.该对象支持含蓄的链式操作.方法返回的数组,集合和方法相互间可以链式调用.
方法会在链式调用最终结束时直接返回未包装的值.显示的链式调用可以使用 `_.chain` 方法.
链式函数的调用是比较懒惰的,函数的执行会直到 `_#value` 被显示或隐式的调用.
`_(value)` 方法会在最终的链式调用后隐式调用 `_#value`. 而 `_.chain` 则需要手动调用 `value` 方法.
<br>
<br>
惰性的评估可以让多种方法进行快速的聚合.快速聚合在合并迭代时是一种优化性能的策略.
这种策略减少了中间数据结构的生成和迭代器执行的次数.
<br>
<br>
链式操作是被支持在自定义构建的,只要 `_#value` 方法直接或间接的被包含在构建里.
<br>
<br>
除了lodash的方法, 包装对象提供了 `Array` 和 `String` 相关的方法.
<br>
<br>
包装 `Array` 相关的方法:<br>
`concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
`splice`, 和  `unshift`
<br>
<br>
包装 `String` 相关的方法:<br>
`replace` 和 `split`
<br>
<br>
包装支持快速聚合的方法:<br>
`compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
`first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
`slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
and `where`
<br>
<br>
包装支持链式的方法:<br>
`after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
`callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
`countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
`defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
`dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
`forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
`functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
`invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
`matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
`modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
`partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
`pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
`reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
`sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
`takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
`transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
`valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
<br>
<br>
包装默认 **不** 支持的链式方法:<br>
`add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
`deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
`findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
`floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
`inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
`isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
`isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
`isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
`last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
`now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
`reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
`snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
`startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
`unescape`, `uniqueId`, `value`, and `words`
<br>
<br>
包装对象的 `sample` 方法,如果 `n` 值被提供，会返回 包装后的值, 否则会返回 未被包装的值.

#### 参数
1. `value` *(&#42;)*: 需要被lodash对象包装的值.

#### 返回值
*(Object)*: 返回lodash包装后的对象. 

#### 示例
```js
var wrapped = _([1, 2, 3]);

// returns an unwrapped value
wrapped.reduce(function(total, n) {
  return total + n;
});
// => 6

// returns a wrapped value
var squares = wrapped.map(function(n) {
  return n * n;
});

_.isArray(squares);
// => false

_.isArray(squares.value());
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_chainvalue"></a>`_.chain(value)`
<a href="#_chainvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6025 "View in source") [&#x24C9;][1]

创建一个经 `lodash` 对象包装后的对象，并且开启显示链式调用模式.

#### 参数
1. `value` *(&#42;)*: 待包装的对象.

#### 返回值
*(Object)*:  返回包装后的对象. 

#### 示例
```js
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _.chain(users)
  .sortBy('age')
  .map(function(chr) {
    return chr.user + ' is ' + chr.age;
  })
  .first()
  .value();
// => 'pebbles is 1'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tapvalue-interceptor-thisarg"></a>`_.tap(value, interceptor, [thisArg])`
<a href="#_tapvalue-interceptor-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6054 "View in source") [&#x24C9;][1]

该方法调用 `拦截器` 并且 返回 `value`.拦截器限定 `thisArg` 并且在被调用的同时传递一个参数: (value).
其目的是在链的中间对 `value` 执行额外的操作.

#### 参数
1. `value` *(&#42;)*: 提供给拦截器的值.
2. `interceptor` *(Function)*: 拦截器方法.
3. `[thisArg]` *(&#42;)*: The `this` binding of `interceptor`.

#### 返回值
*(&#42;)*:  返回 `value`.

#### 示例
```js
_([1, 2, 3])
 .tap(function(array) {
   array.pop();
 })
 .reverse()
 .value();
// => [2, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_thruvalue-interceptor-thisarg"></a>`_.thru(value, interceptor, [thisArg])`
<a href="#_thruvalue-interceptor-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6080 "View in source") [&#x24C9;][1]

该方法类似 `_.tap` 只不过它返回的是 `拦截器` 执行的结果.

#### 参数
1. `value` *(&#42;)*: 提供给拦截器的值.
2. `interceptor` *(Function)*: 拦截器方法.
3. `[thisArg]` *(&#42;)*: The `this` binding of `interceptor`.

#### 返回值
*(&#42;)*:  返回拦截器执行的结果.

#### 示例
```js
_('  abc  ')
 .chain()
 .trim()
 .thru(function(value) {
   return [value];
 })
 .value();
// => ['abc']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypechain"></a>`_.prototype.chain()`
<a href="#_prototypechain">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6109 "View in source") [&#x24C9;][1]

启用显示调用链式模式来包装对象.

#### 返回值
*(Object)*:  返回loadsh包装对象实例. 

#### 示例
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// without explicit chaining
_(users).first();
// => { 'user': 'barney', 'age': 36 }

// with explicit chaining
_(users).chain()
  .first()
  .pick('user')
  .value();
// => { 'user': 'barney' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypecommit"></a>`_.prototype.commit()`
<a href="#_prototypecommit">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6138 "View in source") [&#x24C9;][1]

执行链序列，并返回包装后的结果.

#### 返回值
*(Object)*:  返回新的lodash包装对象.

#### 示例
```js
var array = [1, 2];
var wrapped = _(array).push(3);

console.log(array);
// => [1, 2]

wrapped = wrapped.commit();
console.log(array);
// => [1, 2, 3]

wrapped.last();
// => 3

console.log(array);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypeconcatvalues"></a>`_.prototype.concat([values])`
<a href="#_prototypeconcatvalues">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6162 "View in source") [&#x24C9;][1]

创建一个新的数组连接被包装的数组和一些附加数组或值.

#### 参数
1. `[values]` *(...&#42;)*: 待连接的值队列.

#### 返回值
*(Array)*:  返回连接后的数组.

#### 示例
```js
var array = [1];
var wrapped = _(array).concat(2, [3], [[4]]);

console.log(wrapped.value());
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypeplant"></a>`_.prototype.plant()`
<a href="#_prototypeplant">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6192 "View in source") [&#x24C9;][1]

创建一个克隆链式执行队列, 植入 `value` 作为被包裹的值.
Creates a clone of the chained sequence planting `value` as the wrapped value.

#### 返回值
*(Object)*:  返回lodash包裹的对象.

#### 示例
```js
var array = [1, 2];
var wrapped = _(array).map(function(value) {
  return Math.pow(value, 2);
});

var other = [3, 4];
var otherWrapped = wrapped.plant(other);

otherWrapped.value();
// => [9, 16]

wrapped.value();
// => [1, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypereverse"></a>`_.prototype.reverse()`
<a href="#_prototypereverse">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6230 "View in source") [&#x24C9;][1]

逆转被包裹的数组对象,使数组元素的排序与原数组相反.
<br>
<br>
**Note:** 此方法会修改原数组.

#### 返回值
*(Object)*:  返回逆转后的lodash包裹对象.

#### 示例
```js
var array = [1, 2, 3];

_(array).reverse().value()
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypetostring"></a>`_.prototype.toString()`
<a href="#_prototypetostring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6260 "View in source") [&#x24C9;][1]

返回原始值强制展开后的字符串.

#### 返回值
*(string)*:  强制返回字符串.

#### 示例
```js
_([1, 2, 3]).toString();
// => '1,2,3'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypevalue"></a>`_.prototype.value()`
<a href="#_prototypevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6277 "View in source") [&#x24C9;][1]

执行链式队列并提取展开值.

#### Aliases
*_.prototype.run, _.prototype.toJSON, _.prototype.valueOf*

#### 返回值
*(&#42;)*:  返回解析后的展开值.

#### 示例
```js
_([1, 2, 3]).value();
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Collection” Methods`

<!-- div -->

### <a id="_atcollection-props"></a>`_.at(collection, [props])`
<a href="#_atcollection-props">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6303 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.at "See the npm package")

创建一个数组,该数组包含了所有集合中给定键或索引的值.
键可以逐个指定或者作为数组参数.

#### 参数
1. `collection` *(Array|Object|string)*: 需要被检索的集合.
2. `[props]` *(...(number|number&#91;&#93;|string|string&#91;&#93;)*: 需要获取的元素的索引或属性名,单独逐个指定或数组指定.

#### 返回值
*(Array)*:  返回一个包含所有指定元素的数组.

#### 示例
```js
_.at(['a', 'b', 'c'], [0, 2]);
// => ['a', 'c']

_.at(['barney', 'fred', 'pebbles'], 0, 2);
// => ['barney', 'pebbles']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_countbycollection-iteratee_identity-thisarg"></a>`_.countBy(collection, [iteratee=_.identity], [thisArg])`
<a href="#_countbycollection-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6351 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.countby "See the npm package")

通过 `迭代器` 遍历 `集合` 而产生的结果,返回一个结果值作为键,出现次数作为值的对象.
`迭代器` 限定 `thisArg` 参数并且在被调用时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `迭代器` 提供的是属性名称,则自动创建 `_.property` 回调函数并返回给定元素的值.
<br>
<br>
如果还提供了 `thisArg` 参数,则自动创建 `_.matchesProperty` 回调函数,如果匹配到了元素属性值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象.则自动创建 `_.matches` 回调函数,如果对象含有所有属性 返回 `true`, 否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回组成的汇总对象.

#### 示例
```js
_.countBy([4.3, 6.1, 6.4], function(n) {
  return Math.floor(n);
});
// => { '4': 1, '6': 2 }

_.countBy([4.3, 6.1, 6.4], function(n) {
  return this.floor(n);
}, Math);
// => { '4': 1, '6': 2 }

_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_everycollection-predicate_identity-thisarg"></a>`_.every(collection, [predicate=_.identity], [thisArg])`
<a href="#_everycollection-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6403 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.every "See the npm package")

检察 `集合` 中 **所有** 元素经 `断言` 都返回真值.
断言限定 `thisArg` 参数并在被调用时传递三个参数:(value, index|key, collection).
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### Aliases
*_.all*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(boolean)*:  如果所有元素经 `断言` 都返回真值,则返回 `true` ,否则返回 `fales`.

#### 示例
```js
_.every([true, 1, null, 'yes'], Boolean);
// => false

var users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred',   'active': false }
];

// using the `_.matches` callback shorthand
_.every(users, { 'user': 'barney', 'active': false });
// => false

// using the `_.matchesProperty` callback shorthand
_.every(users, 'active', false);
// => true

// using the `_.property` callback shorthand
_.every(users, 'active');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_filtercollection-predicate_identity-thisarg"></a>`_.filter(collection, [predicate=_.identity], [thisArg])`
<a href="#_filtercollection-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6463 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.filter "See the npm package")

遍历 `集合` 中每个元素,如果元素经 `断言` 返回真值,则该元素将被包含在返回的数组中.
断言被绑定在 `thisArg` 参数并在调用时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### Aliases
*_.select*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回筛选元素所得的数组.

#### 示例
```js
_.filter([4, 5, 6], function(n) {
  return n % 2 == 0;
});
// => [4, 6]

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// using the `_.matches` callback shorthand
_.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
// => ['barney']

// using the `_.matchesProperty` callback shorthand
_.pluck(_.filter(users, 'active', false), 'user');
// => ['fred']

// using the `_.property` callback shorthand
_.pluck(_.filter(users, 'active'), 'user');
// => ['barney']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findcollection-predicate_identity-thisarg"></a>`_.find(collection, [predicate=_.identity], [thisArg])`
<a href="#_findcollection-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6519 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.find "See the npm package")

遍历 `集合` 中所有元素,返回首个经 `断言` 返回真值的元素.
断言被绑定在 `thisArg` 参数并在调用时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### Aliases
*_.detect*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(&#42;)*:  返回匹配的元素 或者 `undefined`.

#### 示例
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.result(_.find(users, function(chr) {
  return chr.age < 40;
}), 'user');
// => 'barney'

// using the `_.matches` callback shorthand
_.result(_.find(users, { 'age': 1, 'active': true }), 'user');
// => 'pebbles'

// using the `_.matchesProperty` callback shorthand
_.result(_.find(users, 'active', false), 'user');
// => 'fred'

// using the `_.property` callback shorthand
_.result(_.find(users, 'active'), 'user');
// => 'barney'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findlastcollection-predicate_identity-thisarg"></a>`_.findLast(collection, [predicate=_.identity], [thisArg])`
<a href="#_findlastcollection-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6540 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findlast "See the npm package")

该方法类似 `_.find` 只不过它遍历元素是从 `集合` 的右往左.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(&#42;)*:  返回匹配到的元素或 `undefined`.

#### 示例
```js
_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findwherecollection-source"></a>`_.findWhere(collection, source)`
<a href="#_findwherecollection-source">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6571 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findwhere "See the npm package")

对 `集合` 和源对象中的元素进行深层次的比较，返回首个匹配到同等属性值的元素.
<br>
<br>
**Note:** 此方法制成比较数组,布尔值,`日期` 对象,数值,'Object' 对象，正则表达式，和字符串.
对象只比较本身的,并不包含继承的或者枚举属性的. 为了比较单一拥有或者继承的属性值可以使用 `_.matchesProperty`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `source` *(Object)*: 需要匹配的源.

#### 返回值
*(&#42;)*:  返回匹配的元素或 `undefined`.

#### 示例
```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
// => 'barney'

_.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
// => 'fred'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_foreachcollection-iteratee_identity-thisarg"></a>`_.forEach(collection, [iteratee=_.identity], [thisArg])`
<a href="#_foreachcollection-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6605 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.foreach "See the npm package")

遍历 `集合` 中的每个元素,并在调用的同时使用 `迭代器` 处理每个元素.
`迭代器` 被绑定在 `thisArg` 参数并在被调用的同时传递三个参数: (value, index|key, collection).
迭代器函数可以在明确的返回 `false` 时提早结束整个遍历.
<br>
<br>
**Note:** 与其他 `集合` 函数一样,对象的 `length` 属性被像数组一样遍历.
为了解决这种问题可以使用 `_.forIn` 或者 `_.forOwn` 进行对象的迭代.

#### Aliases
*_.each*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Array|Object|string)*:  返回 `集合`.

#### 示例
```js
_([1, 2]).forEach(function(n) {
  console.log(n);
}).value();
// => logs each value from left to right and returns the array

_.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
  console.log(n, key);
});
// => logs each value-key pair and returns the object (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_foreachrightcollection-iteratee_identity-thisarg"></a>`_.forEachRight(collection, [iteratee=_.identity], [thisArg])`
<a href="#_foreachrightcollection-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6626 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.foreachright "See the npm package")

该方法类似 `_.forEach` 只不过它迭代每个元素由 `集合` 的右往左.

#### Aliases
*_.eachRight*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Array|Object|string)*:  返回 `集合`.

#### 示例
```js
_([1, 2]).forEachRight(function(n) {
  console.log(n);
}).value();
// => logs each value from right to left and returns the array
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_groupbycollection-iteratee_identity-thisarg"></a>`_.groupBy(collection, [iteratee=_.identity], [thisArg])`
<a href="#_groupbycollection-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6670 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.groupby "See the npm package")

根据 `集合` 中元素经 `迭代器` 返回的结果的值为键创建一个对象.
该对象中键所对应的值是返回该键的迭代器所处理的元素所组成的数组.
`迭代器` 被绑定在 `thisArg` 参数并在被调用的同时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回组成的汇总对象.

#### 示例
```js
_.groupBy([4.2, 6.1, 6.4], function(n) {
  return Math.floor(n);
});
// => { '4': [4.2], '6': [6.1, 6.4] }

_.groupBy([4.2, 6.1, 6.4], function(n) {
  return this.floor(n);
}, Math);
// => { '4': [4.2], '6': [6.1, 6.4] }

// using the `_.property` callback shorthand
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_includescollection-target-fromindex0"></a>`_.includes(collection, target, [fromIndex=0])`
<a href="#_includescollection-target-fromindex0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6707 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.includes "See the npm package")

检察 `target` 是否在 `集合` 中，使用
Checks if `target` is in `collection` using[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
进行相等比较.如果 `fromIndex` 为负值, 则使用 `集合` 的结尾出开始作为偏移量.

#### Aliases
*_.contains, _.include*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `target` *(&#42;)*: 需要查找的值.
3. `[fromIndex=0]` *(number)*: 需要查找的起始索引.

#### 返回值
*(boolean)*:  如果查找到元素返回 `true`,否则返回 `false`.

#### 示例
```js
_.includes([1, 2, 3], 1);
// => true

_.includes([1, 2, 3], 1, 2);
// => false

_.includes({ 'user': 'fred', 'age': 40 }, 'fred');
// => true

_.includes('pebbles', 'eb');
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_indexbycollection-iteratee_identity-thisarg"></a>`_.indexBy(collection, [iteratee=_.identity], [thisArg])`
<a href="#_indexbycollection-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6769 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.indexby "See the npm package")

创建一个由 `集合` 中的元素经 `迭代器` 返回的结果作为键的对象.
该对象键的值是返回该键值的 `迭代器` 所处理元素中的最后一个元素.
迭代器函数被绑定在 `thisArg` 参数 并在被调用时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回组合汇总后的对象.

#### 示例
```js
var keyData = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

_.indexBy(keyData, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

_.indexBy(keyData, function(object) {
  return String.fromCharCode(object.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

_.indexBy(keyData, function(object) {
  return this.fromCharCode(object.code);
}, String);
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_invokecollection-path-args"></a>`_.invoke(collection, path, [args])`
<a href="#_invokecollection-path-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6795 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.invoke "See the npm package")

调用 `path` 参数中的方法处理 `集合`中的每个元素.返回处理后结果的集合.
任何被提供的多余参数都会传递给 `path` 所指定的方法.如果 `methodName` 是个方法名称，则 `集合`
中的每个元素都会被方法调用.

**Note** 该函数改变原有数组.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `path` *(Array|Function|string)*: 被调用的路径或每次迭代被调用的函数.
3. `[args]` *(...&#42;)*: 函数被调用时传递的参数.

#### 返回值
*(Array)*:  返回结果的集合数组.

#### 示例
```js
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]

_.invoke([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mapcollection-iteratee_identity-thisarg"></a>`_.map(collection, [iteratee=_.identity], [thisArg])`
<a href="#_mapcollection-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6864 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.map "See the npm package")

创建一个由 `集合` 中每个元素通过 `迭代器` 返回的结果所组成的数组.
`迭代器` 被绑定在 `thisArg` 参数并在被调用时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.
<br>
<br>
Many lodash methods are guarded to work as iteratees for methods like
`_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
<br>
<br>
The guarded methods are:<br>
`ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
`drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
`parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
`trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
`sum`, `uniq`, and `words`

#### Aliases
*_.collect*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回新的映射后的数组.

#### 示例
```js
function timesThree(n) {
  return n * 3;
}

_.map([1, 2], timesThree);
// => [3, 6]

_.map({ 'a': 1, 'b': 2 }, timesThree);
// => [3, 6] (iteration order is not guaranteed)

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// using the `_.property` callback shorthand
_.map(users, 'user');
// => ['barney', 'fred']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_partitioncollection-predicate_identity-thisarg"></a>`_.partition(collection, [predicate=_.identity], [thisArg])`
<a href="#_partitioncollection-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6929 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.partition "See the npm package")
创建一个分为两个部分的数组,第一部分返回的是 `断言` 返回真值的元素所组成的数组，
第二部分返回的是 `断言` 返回假值的元素所组成的数组.
断言被绑定在 `thisArg` 参数并在被调用时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回被分组的元素的数组.

#### 示例
```js
_.partition([1, 2, 3], function(n) {
  return n % 2;
});
// => [[1, 3], [2]]

_.partition([1.2, 2.3, 3.4], function(n) {
  return this.floor(n) % 2;
}, Math);
// => [[1.2, 3.4], [2.3]]

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

var mapper = function(array) {
  return _.pluck(array, 'user');
};

// using the `_.matches` callback shorthand
_.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
// => [['pebbles'], ['barney', 'fred']]

// using the `_.matchesProperty` callback shorthand
_.map(_.partition(users, 'active', false), mapper);
// => [['barney', 'pebbles'], ['fred']]

// using the `_.property` callback shorthand
_.map(_.partition(users, 'active'), mapper);
// => [['fred'], ['barney', 'pebbles']]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pluckcollection-path"></a>`_.pluck(collection, path)`
<a href="#_pluckcollection-path">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6956 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pluck "See the npm package")

获取 `集合` 中所有元素 `path` 参数所对应的属性值所组成的数组.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `path` *(Array|string)*: 需要采摘的属性路径.

#### 返回值
*(Array)*: 返回所有属性值所组成的数组. 

#### 示例
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

_.pluck(users, 'user');
// => ['barney', 'fred']

var userIndex = _.indexBy(users, 'user');
_.pluck(userIndex, 'age');
// => [36, 40] (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_reducecollection-iteratee_identity-accumulator-thisarg"></a>`_.reduce(collection, [iteratee=_.identity], [accumulator], [thisArg])`
<a href="#_reducecollection-iteratee_identity-accumulator-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L6997 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.reduce "See the npm package")

通过 `迭代器` 遍历集合中的每个元素,迭代器返回的值会提供给下次迭代使用.
如果 `累加器` 参数没有被提供,则集合中的首个元素作为叠加器的初始值.
迭代器被绑定在 `thisArg` 参数并在被调用时传递四个参数: (accumulator, value, index|key, collection).
<br>
<br>
Many lodash methods are guarded to work as iteratees for methods like
`_.reduce`, `_.reduceRight`, and `_.transform`.
<br>
<br>
The guarded methods are:<br>
`assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
and `sortByOrder`

#### Aliases
*_.foldl, _.inject*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[accumulator]` *(&#42;)*: The initial value.
4. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(&#42;)*:  返回累加后的值.

#### 示例
```js
_.reduce([1, 2], function(total, n) {
  return total + n;
});
// => 3

_.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
  result[key] = n * 3;
  return result;
}, {});
// => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_reducerightcollection-iteratee_identity-accumulator-thisarg"></a>`_.reduceRight(collection, [iteratee=_.identity], [accumulator], [thisArg])`
<a href="#_reducerightcollection-iteratee_identity-accumulator-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7021 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.reduceright "See the npm package")

该方法类似 `_.reduce` 只不过它迭代元素的方向是由 `集合` 的右向左.

#### Aliases
*_.foldr*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[accumulator]` *(&#42;)*: The initial value.
4. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(&#42;)*:  返回累加后的值.

#### 示例
```js
var array = [[0, 1], [2, 3], [4, 5]];

_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_rejectcollection-predicate_identity-thisarg"></a>`_.reject(collection, [predicate=_.identity], [thisArg])`
<a href="#_rejectcollection-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7059 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.reject "See the npm package")

该函数和 `_.filter` 正好相反. 该方法返回的是 `集合` 中元素经 `断言` 返回假值的元素所组成的数组.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回过滤后的数组.

#### 示例
```js
_.reject([1, 2, 3, 4], function(n) {
  return n % 2 == 0;
});
// => [1, 3]

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// using the `_.matches` callback shorthand
_.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
// => ['barney']

// using the `_.matchesProperty` callback shorthand
_.pluck(_.reject(users, 'active', false), 'user');
// => ['fred']

// using the `_.property` callback shorthand
_.pluck(_.reject(users, 'active'), 'user');
// => ['barney']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_samplecollection-n"></a>`_.sample(collection, [n])`
<a href="#_samplecollection-n">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7085 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sample "See the npm package")

获取集合中随机的 `n` 个元素.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[n]` *(number)*: 需要提取的元素个数.

#### 返回值
*(&#42;)*:  返回随机的样本.

#### 示例
```js
_.sample([1, 2, 3, 4]);
// => 2

_.sample([1, 2, 3, 4], 2);
// => [3, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_shufflecollection"></a>`_.shuffle(collection)`
<a href="#_shufflecollection">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7122 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.shuffle "See the npm package")

创建一个重新洗牌后的数组.使用[Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle)的版本.

#### 参数
1. `collection` *(Array|Object|string)*: 待洗牌的集合.

#### 返回值
*(Array)*:  返回洗牌后的数组.

#### 示例
```js
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sizecollection"></a>`_.size(collection)`
<a href="#_sizecollection">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7146 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.size "See the npm package")

返回 `集合` 的长度,或对象中枚举属性的个数.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.

#### 返回值
*(number)*:  返回 `集合` 的长度.

#### 示例
```js
_.size([1, 2, 3]);
// => 3

_.size({ 'a': 1, 'b': 2 });
// => 2

_.size('pebbles');
// => 7
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_somecollection-predicate_identity-thisarg"></a>`_.some(collection, [predicate=_.identity], [thisArg])`
<a href="#_somecollection-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7200 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.some "See the npm package")

检察 `集合` 中任意元素个元素的 `断言` 是否返回真值.该函数会在首次断言返回真值时终止.
断言被绑定在 `thisArg` 参数并在被调用时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### Aliases
*_.any*

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(boolean)*:  如果某个元素经 `断言` 返回真值返回 `true`，否则返回 `false`.

#### 示例
```js
_.some([null, 0, 'yes', false], Boolean);
// => true

var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

// using the `_.matches` callback shorthand
_.some(users, { 'user': 'barney', 'active': false });
// => false

// using the `_.matchesProperty` callback shorthand
_.some(users, 'active', false);
// => true

// using the `_.property` callback shorthand
_.some(users, 'active');
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortbycollection-iteratee_identity-thisarg"></a>`_.sortBy(collection, [iteratee=_.identity], [thisArg])`
<a href="#_sortbycollection-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7259 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortby "See the npm package")

创建一个相关元素的数组.该数组是以集合中元素通过 `迭代器` 返回的结果为依据以升序的方式对元素进行排序的集合.
该方法执行一个稳定的排序，也就是说，他会保持相等元素的原始排序.
迭代器被绑定在 `thisArg` 参数并在被调用时传递三个参数: (value, index|key, collection).
<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回被排序后的数组.

#### 示例
```js
_.sortBy([1, 2, 3], function(n) {
  return Math.sin(n);
});
// => [3, 1, 2]

_.sortBy([1, 2, 3], function(n) {
  return this.sin(n);
}, Math);
// => [3, 1, 2]

var users = [
  { 'user': 'fred' },
  { 'user': 'pebbles' },
  { 'user': 'barney' }
];

// using the `_.property` callback shorthand
_.pluck(_.sortBy(users, 'user'), 'user');
// => ['barney', 'fred', 'pebbles']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortbyallcollection-iteratees"></a>`_.sortByAll(collection, iteratees)`
<a href="#_sortbyallcollection-iteratees">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7310 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortbyall "See the npm package")

此方法类似 `_.sortBy` 只不过它可以经由多个迭代器或属性名排序.
<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `iteratees` *(...(Function|Function&#91;&#93;|Object|Object&#91;&#93;|string|string&#91;&#93;)*: 迭代器队列，可以提供单一逐个的值,或者数组. 
#### 返回值
*(Array)*:  返回一个排序后的数组.

#### 示例
```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];

_.map(_.sortByAll(users, ['user', 'age']), _.values);
// => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]

_.map(_.sortByAll(users, 'user', function(chr) {
  return Math.floor(chr.age / 10);
}), _.values);
// => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortbyordercollection-iteratees-orders"></a>`_.sortByOrder(collection, iteratees, [orders])`
<a href="#_sortbyordercollection-iteratees-orders">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7355 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortbyorder "See the npm package")

该方法类似 `_.sortByAll` 只不过它提供了一个特别的参数来决定排序.
如果 `orders` 未被指定,则排序结果以升序的方式存储.如果指定为 "asc" 则升序排列,
指定为 "desc" 则降序排列.

<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `iteratees` *(Function&#91;&#93;|Object&#91;&#93;|string&#91;&#93;)*: 进行排序的迭代器.
3. `[orders]` *(boolean&#91;&#93;)*: 决定迭代器的排序方式.

#### 返回值
*(Array)*:  返回排序后的数组.

#### 示例
```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 36 }
];

// sort by `user` in ascending order and by `age` in descending order
_.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
// => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_wherecollection-source"></a>`_.where(collection, source)`
<a href="#_wherecollection-source">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7400 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.where "See the npm package")

对 `集合` 中元素与 `source` 对象进行深度比较,返回一个所有命中元素所组成的集合.
<br>
<br>
**Note:**  该方法支持比较数组，布尔值，`Date` 对象，数值，`Object` 对象,
正则表达式,和字符串.对象比较对象所有的属性，非继承枚举的属性.为了比较单一拥有的或继承的属性
可以使用 `_.matchesProperty`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `source` *(Object)*: 待检索的对象.

#### 返回值
*(Array)*:  返回筛选的元素所组成的集合.

#### 示例
```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
  { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
];

_.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
// => ['barney']

_.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
// => ['fred']
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Date” Methods`

<!-- div -->

### <a id="_now"></a>`_.now`
<a href="#_now">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7420 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.now "See the npm package")

获取 unix纪元 (1 January 1970 00:00:00 UTC) 到现在所经历的毫秒数.

#### 示例
```js
_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now());
// => logs the number of milliseconds it took for the deferred function to be invoked
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Function” Methods`

<!-- div -->

### <a id="_aftern-func"></a>`_.after(n, func)`
<a href="#_aftern-func">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7449 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.after "See the npm package")

该函数与 `_.before` 相反.该方法创建一个方法,当新方法被调用 `n` 或者更多次时将触发 `func`方法.

#### 参数
1. `n` *(number)*: `func` 所限定新方法应被调用的次数.
2. `func` *(Function)*: 被限定的 `func` 方法.

#### 返回值
*(Function)*:  返回一个新的被限定后的方法.

#### 示例
```js
var saves = ['profile', 'settings'];

var done = _.after(saves.length, function() {
  console.log('done saving!');
});

_.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
// => logs 'done saving!' after the two async saves have completed
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_aryfunc-nfunclength"></a>`_.ary(func, [n=func.length])`
<a href="#_aryfunc-nfunclength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7483 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.ary "See the npm package")

创建一个最多接受 `n` 个参数而忽略其余任意参数的函数.
Creates a function that accepts up to `n` arguments ignoring any
additional arguments.

#### 参数
1. `func` *(Function)*: 需要被限制参数个数的函数.
2. `[n=func.length]` *(number)*: 最多允许参数的数量.

#### 返回值
*(Function)*:  返回一个新的方法.

#### 示例
```js
_.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_beforen-func"></a>`_.before(n, func)`
<a href="#_beforen-func">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7507 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.before "See the npm package")

创建一个新的方法.该方法限定 `func` 方法.允许最多调用 `func` 的次数为 `n`.
当调用新方法的次数大于n时，将返回最后一次调用 `func` 所返回的结果.

#### 参数
1. `n` *(number)*: 限定 `func` 被调用的次数.
2. `func` *(Function)*: 被限定的方法.

#### 返回值
*(Function)*:  返回被限定后的新方法.

#### 示例
```js
jQuery('#add').on('click', _.before(5, addContactToList));
// => allows adding up to 4 contacts to the list
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_bindfunc-thisarg-partials"></a>`_.bind(func, thisArg, [partials])`
<a href="#_bindfunc-thisarg-partials">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7564 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.bind "See the npm package")

创建一个方法,该方法的 `this` 被绑定在 `thisArg` 从那时上.调用该方法即调用 `func` 方法，
并在调用的同时可以传递一些参数给 `func` 方法.
<br>
<br>
`_.bind.placeholder(_.bind方法的占位符)` 在构建时默认的是 `_` . 可以用来作为代理参数的占位符来使用.
<br>
<br>
**Note:** 不像原生 `Function#bind` ,该方法不会给被绑定的方法添加 `length` 属性.

#### 参数
1. `func` *(Function)*: 被绑定的方法.
2. `thisArg` *(&#42;)*: `func` 的 `this` 所绑定的对象.
3. `[partials]` *(...&#42;)*: 需代理的参数.

#### 返回值
*(Function)*:  返回被绑定后的函数.

#### 示例
```js
var greet = function(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
};

var object = { 'user': 'fred' };

var bound = _.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// using placeholders
var bound = _.bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_bindallobject-methodnames"></a>`_.bindAll(object, [methodNames])`
<a href="#_bindallobject-methodnames">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7601 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.bindall "See the npm package")

绑定对象中的方法到对象中. 如果提供了 `methodNames` 参数,则绑定对象中与参数匹配的方法.
`methodName` 可以是逐个的方法名或方法名数组.如果没有提供 `methodNames` 参数，则枚举
对象中的方法进行绑定.
<br>
<br>
**Note:** 该方法并不设置 `length` 属性至绑定的方法.

#### 参数
1. `object` *(Object)*: 待绑定的对象.
2. `[methodNames]` *(...(string|string&#91;&#93;)*: 被绑定对象的属性名,可以是逐个参数或数组.

#### 返回值
*(Object)*:  返回 `Object`.

#### 示例
```js
var view = {
  'label': 'docs',
  'onClick': function() {
    console.log('clicked ' + this.label);
  }
};

_.bindAll(view);
jQuery('#docs').on('click', view.onClick);
// => logs 'clicked docs' when the element is clicked
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_bindkeyobject-key-partials"></a>`_.bindKey(object, key, [partials])`
<a href="#_bindkeyobject-key-partials">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7658 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.bindkey "See the npm package")

创建一个方法，该方法绑定 `object[key]` 方法.并且可以预先提供被需要被调用的参数.
<br>
<br>
该方法与 `_.bind` 不同之处是它允许被绑定的函数进行重定义或者没有找到.
跟多详细描述See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
<br>
<br>
`_.bind.placeholder(_.bind方法的占位符)` 在构建时默认的是 `_` . 可以用来作为代理参数的占位符来使用.

#### 参数
1. `object` *(Object)*: 绑定方法的对象.
2. `key` *(string)*: 需要绑定方法在对象中的键.
3. `[partials]` *(...&#42;)*: 所提供的代理参数.

#### 返回值
*(Function)*:  返回绑定后的方法.

#### 示例
```js
var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

var bound = _.bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'

object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};

bound('!');
// => 'hiya fred!'

// using placeholders
var bound = _.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_curryfunc-arityfunclength"></a>`_.curry(func, [arity=func.length])`
<a href="#_curryfunc-arityfunclength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7707 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.curry "See the npm package")

创建一个函数,该函数接收一个或多个 `func` 的参数.当该函数被调用时,如果 `func` 所需
要传递的所有参数都被提供,则直接返回 `func` 所执行的结果,否则继续返回该函数并等待
接收剩余的参数.可以使用 `func.length` 参数强制需要累积的参数个数.
<br>
<br>
`_.curry.placeholder(_.curry方法的占位符)` 在构建时默认的是 `_` . 可以用来作为代理参数的占位符来使用.
<br>
<br>
**Note:** 该方法并不设置 `length` 属性到curried函数.

#### 参数
1. `func` *(Function)*: 需要提供的方法.
2. `[arity=func.length]` *(number)*: 需要提供的参数数量.

#### 返回值
*(Function)*:  返回curry后的方法.

#### 示例
```js
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// using placeholders
curried(1)(_, 3)(2);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_curryrightfunc-arityfunclength"></a>`_.curryRight(func, [arity=func.length])`
<a href="#_curryrightfunc-arityfunclength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7746 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.curryright "See the npm package")

该方法类似 `_.curry` 只不过它接收参数的方式使用了 `_.partialRight` 代替 `_.partial`.
<br>
<br>
`_.curry.placeholder(_.curry方法的占位符)` 在构建时默认的是 `_` . 可以用来作为代理参数的占位符来使用.
<br>
<br>
**Note:** 该方法并不设置 `length` 属性到curried函数.

#### 参数
1. `func` *(Function)*: 待curry化的方法.
2. `[arity=func.length]` *(number)*: 需要参数的数量.

#### 返回值
*(Function)*:  返回curry化后的方法.

#### 示例
```js
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curryRight(abc);

curried(3)(2)(1);
// => [1, 2, 3]

curried(2, 3)(1);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// using placeholders
curried(3)(1, _)(2);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_debouncefunc-wait0-options"></a>`_.debounce(func, [wait=0], [options])`
<a href="#_debouncefunc-wait0-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7811 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.debounce "See the npm package")

创建一个具有防抖功能的函数.该函数会在 `wait` 毫秒数之后调用 `func` 方法.
该函数提供了 `cancel` 方法来取消 `func` 方法的调用.
可以提供一个选项对象去明确的指定 `func` 被调用的方式.
<br>
<br>
**Note:** 如果 `leading` 和 `trailing` 选项都为 `true`, 则 `func` 允许 `trailing` 
方式调用的条件为: 在 `wait` 期间多次调用防抖方法.
<br>
<br>
关于 `_.debounce` 和 `_.throttle` 间区别: [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)

#### 参数
1. `func` *(Function)*: 需要防抖的方法.
2. `[wait=0]` *(number)*: 需要延时的时间 (毫秒).
3. `[options]` *(Object)*: 选项对象.
4. `[options.leading=false]` *(boolean)*: 如果为 `true`,则优先调用 `func`,并延时允许下次调用的时间.
5. `[options.maxWait]` *(number)*: 设置 `func` 允许被延时的最大值.
6. `[options.trailing=true]` *(boolean)*: 如果为 `true`,则 `func` 会在延时结束后被调用.

#### 返回值
*(Function)*:  返回防抖后的方法.

#### 示例
```js
// avoid costly calculations while the window size is in flux
jQuery(window).on('resize', _.debounce(calculateLayout, 150));

// invoke `sendMail` when the click event is fired, debouncing subsequent calls
jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));

// ensure `batchLog` is invoked once after 1 second of debounced calls
var source = new EventSource('/stream');
jQuery(source).on('message', _.debounce(batchLog, 250, {
  'maxWait': 1000
}));

// cancel a debounced call
var todoChanges = _.debounce(batchLog, 1000);
Object.observe(models.todo, todoChanges);

Object.observe(models, function(changes) {
  if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
    todoChanges.cancel();
  }
}, ['delete']);

// ...at some point `models.todo` is changed
models.todo.completed = true;

// ...before 1 second has passed `models.todo` is deleted
// which cancels the debounced `todoChanges` call
delete models.todo;
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_deferfunc-args"></a>`_.defer(func, [args])`
<a href="#_deferfunc-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7936 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.defer "See the npm package")

延迟调用 `func` 直到当前堆栈清理完毕.任何额外提供的参数都会传递给 `func`.

#### 参数
1. `func` *(Function)*: 待延迟的方法.
2. `[args]` *(...&#42;)*: 将传递给被调用方法的参数队列.

#### 返回值
*(number)*:  返回计时器id.

#### 示例
```js
_.defer(function(text) {
  console.log(text);
}, 'deferred');
// logs 'deferred' after one or more milliseconds
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_delayfunc-wait-args"></a>`_.delay(func, wait, [args])`
<a href="#_delayfunc-wait-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7958 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.delay "See the npm package")

延迟 `wait` 毫秒后调用 `func` .任何额外的参数都会在 `func` 被调用时传递.

#### 参数
1. `func` *(Function)*: 待延时执行的函数.
2. `wait` *(number)*: 待延时的毫秒.
3. `[args]` *(...&#42;)*: 待传递的参数队列.

#### 返回值
*(number)*:  返回计时器id.

#### 示例
```js
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
// => logs 'later' after one second
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flowfuncs"></a>`_.flow([funcs])`
<a href="#_flowfuncs">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L7982 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flow "See the npm package")

创建一个流式函数,流式函数按顺序执行所提供的方法并将方法的返回值传递给下一个函数,
直到函数执行结束,返回执行结果.

#### 参数
1. `[funcs]` *(...Function)*: 待被调用的方法队列.

#### 返回值
*(Function)*:  返回一个新的流式函数.

#### 示例
```js
function square(n) {
  return n * n;
}

var addSquare = _.flow(_.add, square);
addSquare(1, 2);
// => 9
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flowrightfuncs"></a>`_.flowRight([funcs])`
<a href="#_flowrightfuncs">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8004 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flowright "See the npm package")

该方法类似于 `_.flow` 只不过它创建的流式函数的执行待调用方法的方向是从右向左.

#### Aliases
*_.backflow, _.compose*

#### 参数
1. `[funcs]` *(...Function)*: 待调用的方法.

#### 返回值
*(Function)*:  返回新的流式函数.

#### 示例
```js
function square(n) {
  return n * n;
}

var addSquare = _.flowRight(square, _.add);
addSquare(1, 2);
// => 9
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_memoizefunc-resolver"></a>`_.memoize(func, [resolver])`
<a href="#_memoizefunc-resolver">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8057 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.memoize "See the npm package")

创建一个将结果缓存化后的函数. 如果 `resolver` 参数被提供，它将结果被缓存的映射键.
默认第一个参数被用来强制转换为字符串并用作缓存的键. `func` 被调用时 `this` 绑定
缓存函数.
<br>
<br>
**Note:**  缓存被暴露在缓存化后的函数的 `cache` 属性中. 它是可以进行定制的，
只要你实现了[`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)的 `get`, `has` 和 `set` 方法接口.
然后替换掉 `_.memoize.Cache` 的默认构造函数.

#### 参数
1. `func` *(Function)*: 待缓存化的函数.
2. `[resolver]` *(Function)*: 该函数解析缓存键.

#### 返回值
*(Function)*:  返回缓存化后的函数.

#### 示例
```js
var upperCase = _.memoize(function(string) {
  return string.toUpperCase();
});

upperCase('fred');
// => 'FRED'

// modifying the result cache
upperCase.cache.set('fred', 'BARNEY');
upperCase('fred');
// => 'BARNEY'

// replacing `_.memoize.Cache`
var object = { 'user': 'fred' };
var other = { 'user': 'barney' };
var identity = _.memoize(_.identity);

identity(object);
// => { 'user': 'fred' }
identity(other);
// => { 'user': 'fred' }

_.memoize.Cache = WeakMap;
var identity = _.memoize(_.identity);

identity(object);
// => { 'user': 'fred' }
identity(other);
// => { 'user': 'barney' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_modargsfunc-transforms"></a>`_.modArgs(func, [transforms])`
<a href="#_modargsfunc-transforms">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8108 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.modargs "See the npm package")

创建一个函数,该函数允许所包装的函数中的每个参数经相对应的转换函数进行处理.

#### 参数
1. `func` *(Function)*: 待包装的函数.
2. `[transforms]` *(...(Function|Function&#91;&#93;)*: 参数的转换函数队列.可以指定为逐个填写或组装成数组.

#### 返回值
*(Function)*:  返回包装后的函数.

#### 示例
```js
function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

var modded = _.modArgs(function(x, y) {
  return [x, y];
}, square, doubled);

modded(1, 2);
// => [1, 4]

modded(5, 10);
// => [25, 20]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_negatepredicate"></a>`_.negate(predicate)`
<a href="#_negatepredicate">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8142 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.negate "See the npm package")

创建一个函数，该函数否定 `func` 断言的结果.
`func` 断言被调用时 `this` 绑定到所创建的函数并传递参数集.

#### 参数
1. `predicate` *(Function)*: 待被否定的断言.

#### 返回值
*(Function)*:  返回一个新方法.

#### 示例
```js
function isEven(n) {
  return n % 2 == 0;
}

_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_oncefunc"></a>`_.once(func)`
<a href="#_oncefunc">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8168 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.once "See the npm package")

创建一个受限的函数，该函数只调用 `func` 一次，重复调用会返回首次调用返回的结果.
`func` 被调用时 `this` 绑定在被创建的函数并传递参数集.

#### 参数
1. `func` *(Function)*: 待受限的函数.

#### 返回值
*(Function)*:  返回一个受限的函数.

#### 示例
```js
var initialize = _.once(createApplication);
initialize();
initialize();
// `initialize` invokes `createApplication` once
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_partialfunc-partials"></a>`_.partial(func, [partials])`
<a href="#_partialfunc-partials">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8204 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.partial "See the npm package")

创建一个函数，该函数调用 `func` 并传递 `部分` 预置参数到被调用的方法中. 
该方法类似于 `_.bind` 只不过 它不修改 `this` 绑定.
<br>
<br>
`_.partial.placeholder` 默认值是 `_` , 可以作为部分参数的占位符.
<br>
<br>
**Note:** 该方法不设置预置函数的 "length" 属性.

#### 参数
1. `func` *(Function)*: 待预置化的函数.
2. `[partials]` *(...&#42;)*: 预置的参数.

#### 返回值
*(Function)*:  返回一个预置函数.

#### 示例
```js
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// using placeholders
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_partialrightfunc-partials"></a>`_.partialRight(func, [partials])`
<a href="#_partialrightfunc-partials">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8237 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.partialright "See the npm package")

该方法类似于 `_.partial` 只不过传递预置参数的方式是从右到左.
<br>
<br>
`_.partial.placeholder` 默认值是 `_` , 可以作为部分参数的占位符.
<br>
<br>
**Note:** 该方法不设置预置函数的 "length" 属性.

#### 参数
1. `func` *(Function)*: 待预置的函数.
2. `[partials]` *(...&#42;)*: 预置的参数.

#### 返回值
*(Function)*:  返回一个预置函数.

#### 示例
```js
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var greetFred = _.partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'

// using placeholders
var sayHelloTo = _.partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_reargfunc-indexes"></a>`_.rearg(func, indexes)`
<a href="#_reargfunc-indexes">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8267 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.rearg "See the npm package")

创建一个函数,该函数调用 `func` ,所传递的参数根据 `indexes` 安排到相应的位置.
第 1 个 `indexes` 索引值, 对应所传递参数的位置，并将该参数 传递给 `func` 第 1 个参数.
第 2 个 `indexes` 索引值, 对应所传递参数的位置，并将该参数 传递给 `func` 第 2 个参数.
...

#### 参数
1. `func` *(Function)*: 待调用的函数.
2. `indexes` *(...(number|number&#91;&#93;)*: 传递参数的索引队列.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, 2, 0, 1);

rearged('b', 'c', 'a')
// => ['a', 'b', 'c']

var map = _.rearg(_.map, [1, 0]);
map(function(n) {
  return n * 3;
}, [1, 2, 3]);
// => [3, 6, 9]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_restparamfunc-startfunclength-1"></a>`_.restParam(func, [start=func.length-1])`
<a href="#_restparamfunc-startfunclength-1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8293 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.restparam "See the npm package")

创建一个函数,该函数调用 `func` 并绑定 `this` 到创建后的函数. 并且参数从 `start`
位置开始后的参数被提供为一个数组传递给 `func` 调用.
<br>
<br>
**Note:** 该方法基于[rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).

#### 参数
1. `func` *(Function)*: 待处理的方法.
2. `[start=func.length-1]` *(number)*: 起始位置.

#### 返回值
*(Function)*:  返回一个新的方法.

#### 示例
```js
var say = _.restParam(function(what, names) {
  return what + ' ' + _.initial(names).join(', ') +
    (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});

say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_spreadfunc"></a>`_.spread(func)`
<a href="#_spreadfunc">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8353 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.spread "See the npm package")

创建一个函数，该函数调用 `func` 并绑定 `this`.并允许数组参数自动展开传递给 `func`.
参考[`Function#apply`](https://es5.github.io/#x15.3.4.3).
<br>
<br>
**Note:** 该方法基于[spread operator](https://developer.mozilla.org/Web/JavaScript/Reference/Operators/Spread_operator).

#### 参数
1. `func` *(Function)*: 待执行的函数.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var say = _.spread(function(who, what) {
  return who + ' says ' + what;
});

say(['fred', 'hello']);
// => 'fred says hello'

// with a Promise
var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);

numbers.then(_.spread(function(x, y) {
  return x + y;
}));
// => a Promise of 76
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_throttlefunc-wait0-options"></a>`_.throttle(func, [wait=0], [options])`
<a href="#_throttlefunc-wait0-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8401 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.throttle "See the npm package")

创建一个节流的函数.该函数调用 `func` 在 `wait` 毫秒内 最多执行一次.
节流函数提供 `cancel` 函数用于取消 `func` 的调用. 
提供了一个选项对象来决定 `func` 在 `wait` 超时时的调用方式.
并返回最后一次调用 `func` 返回的结果.
<br>
<br>
**Note:** 如果 `leading` 和 `trailing` 选项都为 `true`, `func` 以超时后的方式调用的
条件是：节流函数在 `wait` 超时期内调用多次.
<br>
<br>
更多 `_.throttle` 和 `_.debounce` 的区别，请看 [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)

#### 参数
1. `func` *(Function)*: 待节流的函数.
2. `[wait=0]` *(number)*:  需要节流的时间(毫秒).
3. `[options]` *(Object)*: 选项对象.
4. `[options.leading=true]` *(boolean)*: Specify invoking on the leading edge of the timeout.
5. `[options.trailing=true]` *(boolean)*: Specify invoking on the trailing edge of the timeout.

#### 返回值
*(Function)*:  返回节流后的函数.

#### 示例
```js
// avoid excessively updating the position while scrolling
jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
  'trailing': false
}));

// cancel a trailing throttled call
jQuery(window).on('popstate', throttled.cancel);
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_wrapvalue-wrapper"></a>`_.wrap(value, wrapper)`
<a href="#_wrapvalue-wrapper">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8438 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.wrap "See the npm package")

创建一个方法，并提供 `value` 到 `wrapper` 函数的第一个参数.任何多余的参数都会被提供
给 `wrapper` 函数. wrapper 子被调用时 `this`绑定到所创建的函数.

#### 参数
1. `value` *(&#42;)*: 待传递给wrapper的参数.
2. `wrapper` *(Function)*: The wrapper function.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Lang” Methods`

<!-- div -->

### <a id="_clonevalue-isdeep-customizer-thisarg"></a>`_.clone(value, [isDeep], [customizer], [thisArg])`
<a href="#_clonevalue-isdeep-customizer-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8496 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.clone "See the npm package")

克隆一个 `value`.如果 `isDeep` 为 `true` ，则嵌套的对象将被克隆.否则他们是传递引用.
如果 `customizer` 被提供，它将被调用并返回克隆后的值. 如果 `customizer` 返回 `undefined`
克隆经经过该函数处理，并不是直接替换.
`customizer` 被绑定在 `thisArg` 并在被调用时传递三个参数: (value [, index|key, object]).
<br>
<br>
**Note:** 该方法是松散的并基于[structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
枚举属性及非构造函数创建的对象属性在克隆时会被忽略.
如果一些不能被克隆的值，例如 functions, DOM nodes,Maps, Sets, and WeakMaps,将返回空的对象.

#### 参数
1. `value` *(&#42;)*: 待克隆的值.
2. `[isDeep]` *(boolean)*: 是否深度克隆.
3. `[customizer]` *(Function)*: 定制化克隆方法.
4. `[thisArg]` *(&#42;)*: The `this` 绑定 `customizer`.

#### 返回值
*(&#42;)*:  返回克隆后的值.

#### 示例
```js
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

var shallow = _.clone(users);
shallow[0] === users[0];
// => true

var deep = _.clone(users, true);
deep[0] === users[0];
// => false

// using a customizer callback
var el = _.clone(document.body, function(value) {
  if (_.isElement(value)) {
    return value.cloneNode(false);
  }
});

el === document.body
// => false
el.nodeName
// => BODY
el.childNodes.length;
// => 0
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_clonedeepvalue-customizer-thisarg"></a>`_.cloneDeep(value, [customizer], [thisArg])`
<a href="#_clonedeepvalue-customizer-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8555 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.clonedeep "See the npm package")

深度克隆的 `value`. 如果 `customizer` 被提供，它将被调用并返回克隆后的值. 如果 `customizer` 返回 `undefined`
克隆经经过该函数处理，并不是直接替换.
`customizer` 被绑定在 `thisArg` 并在被调用时传递三个参数: (value [, index|key, object]).
<br>
**Note:** 该方法是松散的并基于[structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
枚举属性及非构造函数创建的对象属性在克隆时会被忽略.
如果一些不能被克隆的值，例如 functions, DOM nodes,Maps, Sets, and WeakMaps,将返回空的对象.

#### 参数
1. `value` *(&#42;)*: 待深度克隆的值.
2. `[customizer]` *(Function)*: 定制化克隆方法.
3. `[thisArg]` *(&#42;)*: The `this` 绑定 `customizer`.

#### 返回值
*(&#42;)*:  返回深度克隆后的值.

#### 示例
```js
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

var deep = _.cloneDeep(users);
deep[0] === users[0];
// => false

// using a customizer callback
var el = _.cloneDeep(document.body, function(value) {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
});

el === document.body
// => false
el.nodeName
// => BODY
el.childNodes.length;
// => 20
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_gtvalue-other"></a>`_.gt(value, other)`
<a href="#_gtvalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8581 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.gt "See the npm package")

检察 `value` 是否比 `other` 更大.
Checks if `value` is greater than `other`.

#### 参数
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 比 `other` 更大,否则 `false`.

#### 示例
```js
_.gt(3, 1);
// => true

_.gt(3, 3);
// => false

_.gt(1, 3);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_gtevalue-other"></a>`_.gte(value, other)`
<a href="#_gtevalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8605 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.gte "See the npm package")

检查 `value` 是否 大于等于 `other`.

#### 参数
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 大于等于 `other`, 否则返回 `false`.

#### 示例
```js
_.gte(3, 1);
// => true

_.gte(3, 3);
// => true

_.gte(1, 3);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isargumentsvalue"></a>`_.isArguments(value)`
<a href="#_isargumentsvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8625 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isarguments "See the npm package")

检查 `value` 是不是 `arguments` 类对象.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*: 返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isArguments(function() { return arguments; }());
// => true

_.isArguments([1, 2, 3]);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isarrayvalue"></a>`_.isArray(value)`
<a href="#_isarrayvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8646 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isarray "See the npm package")

检查 `value` 是否 `Array` 类型的对象.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isArray([1, 2, 3]);
// => true

_.isArray(function() { return arguments; }());
// => false
``	`
* * *

<!-- /div -->

<!-- div -->

### <a id="_isbooleanvalue"></a>`_.isBoolean(value)`
<a href="#_isbooleanvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8666 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isboolean "See the npm package")

检查 `value` 是否原始的布尔类型或对象.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isBoolean(false);
// => true

_.isBoolean(null);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isdatevalue"></a>`_.isDate(value)`
<a href="#_isdatevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8686 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isdate "See the npm package")

检查 `value` 是否 `Data` 类型的对象.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isDate(new Date);
// => true

_.isDate('Mon April 23 2012');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_iselementvalue"></a>`_.isElement(value)`
<a href="#_iselementvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8706 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.iselement "See the npm package")

检查 `value` 是否 DOM 元素.
Checks if `value` is a DOM element.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是一个 DOM 元素, 否则返回 `false`.

#### 示例
```js
_.isElement(document.body);
// => true

_.isElement('<body>');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isemptyvalue"></a>`_.isEmpty(value)`
<a href="#_isemptyvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8737 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isempty "See the npm package")

检查 `value` 是否为空. 值被判定为空的依据是,对象，数组，字符串,集合的长度为0.

#### 参数
1. `value` *(Array|Object|string)*: The value to inspect.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 为空, 否则返回 `false`.

#### 示例
```js
_.isEmpty(null);
// => true

_.isEmpty(true);
// => true

_.isEmpty(1);
// => true

_.isEmpty([1, 2, 3]);
// => false

_.isEmpty({ 'a': 1 });
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isequalvalue-other-customizer-thisarg"></a>`_.isEqual(value, other, [customizer], [thisArg])`
<a href="#_isequalvalue-other-customizer-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8792 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isequal "See the npm package")

执行深度比较两个值来判定它们是否相等.如果 `customizer` 被提供，它将被调用来比较值。
如果 `customizer` 返回 `undefined` ,函数将只做处理，并不作为比较结果.
`customizer` 被绑定在 `thisArg` 并且在被调用时传递三个参数: (value, other [, index[key]]).
<br>
<br>
**Note:** 该方法支持比较数组，布尔，日期对象，数值，对象，正在表达式，和字符串.对象比较只
比较它们自己的属性，并不包括继承的和枚举的属性。函数和DOM节点并不被支持.
提供 `customizer` 方法可以继承支持其他不支持的对比.

#### Aliases
*_.eq*

#### 参数
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.
3. `[customizer]` *(Function)*: 定制化对比函数.
4. `[thisArg]` *(&#42;)*: The `this` 绑定 `customizer`.

#### 返回值
*(boolean)*:  返回 `true` 如果两个值相等,否则返回 `false`.

#### 示例
```js
var object = { 'user': 'fred' };
var other = { 'user': 'fred' };

object == other;
// => false

_.isEqual(object, other);
// => true

// using a customizer callback
var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];

_.isEqual(array, other, function(value, other) {
  if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
    return true;
  }
});
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_iserrorvalue"></a>`_.isError(value)`
<a href="#_iserrorvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8815 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.iserror "See the npm package")

检查 `value` 是不是一个 `Error`, `EvalError`, `RangeError`, `ReferenceError`,
`SyntaxError`, `TypeError`, 或 `URIError` 对象.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是一个错误对象, 否则返回 `false`.

#### 示例
```js
_.isError(new Error);
// => true

_.isError(Error);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isfinitevalue"></a>`_.isFinite(value)`
<a href="#_isfinitevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8846 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isfinite "See the npm package")

检查 `value` 是否是一个有限的原始数值.
<br>
<br>
**Note:** 该方法基于[`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是一个有限的原始数值, 否则返回 `false`.

#### 示例
```js
_.isFinite(10);
// => true

_.isFinite('10');
// => false

_.isFinite(true);
// => false

_.isFinite(Object(10));
// => false

_.isFinite(Infinity);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isfunctionvalue"></a>`_.isFunction(value)`
<a href="#_isfunctionvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8866 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isfunction "See the npm package")

检查 `value` 是否一个 `Function` 类型的对象.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isFunction(_);
// => true

_.isFunction(/abc/);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ismatchobject-source-customizer-thisarg"></a>`_.isMatch(object, source, [customizer], [thisArg])`
<a href="#_ismatchobject-source-customizer-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8939 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.ismatch "See the npm package")
执行深度比较 `object` 和 `source` 来判定 `objec` 中是否包含相对的属性和值.
如果 `customizer` 被提供. 它将被调用来进行比较.
如果 `customizer` 返回 `undefined` 则该函数只做处理，并不作为对比值.
`customizer` 被绑定在 `thisArg` 并在被调用时传递三个参数: (value, other, index|key ).
<br>
<br>
**Note:** 该方法支持的对比属性的有数组，布尔值，日期对象，数值，对象，正则表达式，和字符串.
函数对象和DOM节点不被支持.提供定制化方法可以继承比较其他值.

#### 参数
1. `object` *(Object)*: 待检查的对象.
2. `source` *(Object)*: 待匹配的属性和值.
3. `[customizer]` *(Function)*: 定制化匹配函数.
4. `[thisArg]` *(&#42;)*: The `this` 绑定 `customizer`.
	
#### 返回值
*(boolean)*:  返回 `true` 如果 `object` 匹配到, 否则返回 `false`.

#### 示例
```js
var object = { 'user': 'fred', 'age': 40 };

_.isMatch(object, { 'age': 40 });
// => true

_.isMatch(object, { 'age': 36 });
// => false

// using a customizer callback
var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };

_.isMatch(object, source, function(value, other) {
  return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
});
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnanvalue"></a>`_.isNaN(value)`
<a href="#_isnanvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8969 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnan "See the npm package")

检查 如果 `value` 是 `NaN`.
<br>
<br>
**Note:** 该方法不同于[`isNaN`](https://es5.github.io/#x15.1.2.4)的对 `undefind` 和 其他非数字值返回 `true`.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是 `NaN`,否则返回 `false`.

#### 示例
```js
_.isNaN(NaN);
// => true

_.isNaN(new Number(NaN));
// => true

isNaN(undefined);
// => true

_.isNaN(undefined);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnativevalue"></a>`_.isNative(value)`
<a href="#_isnativevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8991 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnative "See the npm package")

检查 `value` 是否一个原生的函数.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是一个原生的方法,否则返回 `false`.

#### 示例
```js
_.isNative(Array.prototype.push);
// => true

_.isNative(_);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnullvalue"></a>`_.isNull(value)`
<a href="#_isnullvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9017 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnull "See the npm package")

检查 `value` 是否为 `null`.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 为 `null`,否则返回 `false`.

#### 示	例
```js
_.isNull(null);
// => true

_.isNull(void 0);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnumbervalue"></a>`_.isNumber(value)`
<a href="#_isnumbervalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9043 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnumber "See the npm package")

检查 `value` 是否为 `Number` 类型的原始数值或对象.
<br>
<br>
**Note:** 要排除 `Infinity`, `-Infinity`, 和 `NaN`,使用 `_.isFinite`.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isNumber(8.4);
// => true

_.isNumber(NaN);
// => true

_.isNumber('8.4');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isobjectvalue"></a>`_.isObject(value)`
<a href="#_isobjectvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L8893 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isobject "See the npm package")

检查 `value` 是否为 [language type](https://es5.github.io/#x8) 的 `Object` 对象.
(e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是一个对象,否则返回 `false`.

#### 示例
```js
_.isObject({});
// => true

_.isObject([1, 2, 3]);
// => true

_.isObject(1);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isplainobjectvalue"></a>`_.isPlainObject(value)`
<a href="#_isplainobjectvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9077 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isplainobject "See the npm package")

检查 `value` 是一个朴素的对象，即是说，该对象被 `Object` 构造函数所创建 或者 对象的 `[[Prototype]]` 为空.
<br>
<br>
**Note:** 此方法假定由对象构造函数创建的对象没有继承枚举的属性。

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是一个朴素的对象,否则返回 `false`.

#### 示例
```js
function Foo() {
  this.a = 1;
}

_.isPlainObject(new Foo);
// => false

_.isPlainObject([1, 2, 3]);
// => false

_.isPlainObject({ 'x': 0, 'y': 0 });
// => true

_.isPlainObject(Object.create(null));
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isregexpvalue"></a>`_.isRegExp(value)`
<a href="#_isregexpvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9121 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isregexp "See the npm package")

检查 `value` 是否为 `RegExp` 类型的对象.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isRegExp(/abc/);
// => true

_.isRegExp('/abc/');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isstringvalue"></a>`_.isString(value)`
<a href="#_isstringvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9141 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isstring "See the npm package")

检查 `value` 是否为 `String` 类型的原始值或对象.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isString('abc');
// => true

_.isString(1);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_istypedarrayvalue"></a>`_.isTypedArray(value)`
<a href="#_istypedarrayvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9161 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.istypedarray "See the npm package")

检查 `value` 是否被归为类型数组.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 是正确的类型,否则返回 `false`.

#### 示例
```js
_.isTypedArray(new Uint8Array);
// => true

_.isTypedArray([]);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isundefinedvalue"></a>`_.isUndefined(value)`
<a href="#_isundefinedvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9181 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isundefined "See the npm package")

检查 `value` 是否为 `undefined`.

#### 参数
1. `value` *(&#42;)*: The value to check.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 为 `undefined`,否则返回 `false`.

#### 示例
```js
_.isUndefined(void 0);
// => true

_.isUndefined(null);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ltvalue-other"></a>`_.lt(value, other)`
<a href="#_ltvalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9205 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.lt "See the npm package")

检查 `value` 是否小于 `other`.

#### 参数
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 小于 `other`,否则返回 `false`.

#### 示例
```js
_.lt(1, 3);
// => true

_.lt(3, 3);
// => false

_.lt(3, 1);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ltevalue-other"></a>`_.lte(value, other)`
<a href="#_ltevalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9229 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.lte "See the npm package")

检查 `value` 是否小于等于 `other`.

#### 参数
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### 返回值
*(boolean)*:  返回 `true` 如果 `value` 小于等于 `other`, 否则返回 `false`.

#### 示例
```js
_.lte(1, 3);
// => true

_.lte(3, 3);
// => true

_.lte(3, 1);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_toarrayvalue"></a>`_.toArray(value)`
<a href="#_toarrayvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9248 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.toarray "See the npm package")

转换 `value` 为一个数组.

#### 参数
1. `value` *(&#42;)*: The value to convert.

#### 返回值
*(Array)*:  返回转换后的数组.

#### 示例
```js
(function() {
  return _.toArray(arguments).slice(1);
}(1, 2, 3));
// => [2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_toplainobjectvalue"></a>`_.toPlainObject(value)`
<a href="#_toplainobjectvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9284 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.toplainobject "See the npm package")

转换 `value` 为一个普通的对象，并将其继承的枚举属性转换为普通对象的属性.

#### 参数
1. `value` *(&#42;)*: The value to convert.

#### 返回值
*(Object)*:  返回转换后的普通对象.

#### 示例
```js
function Foo() {
  this.b = 2;
}

Foo.prototype.c = 3;

_.assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }

_.assign({ 'a': 1 }, _.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Math” Methods`

<!-- div -->

### <a id="_addaugend-addend"></a>`_.add(augend, addend)`
<a href="#_addaugend-addend">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11803 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.add "See the npm package")

将两个数值相加.

#### 参数
1. `augend` *(number)*: The first number to add.
2. `addend` *(number)*: The second number to add.

#### 返回值
*(number)*:  返回相加之后的值.

#### 示例
```js
_.add(6, 4);
// => 10
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ceiln-precision0"></a>`_.ceil(n, [precision=0])`
<a href="#_ceiln-precision0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11827 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.ceil "See the npm package")

根据 `precision` 计算 `n` 的进位四舍五入值.	

#### 参数
1. `n` *(number)*: 需要四舍五入的值.
2. `[precision=0]` *(number)*: 需要提供的精度.

#### 返回值
*(number)*:  返回计算后的结果.

#### 示例
```js
_.ceil(4.006);
// => 5

_.ceil(6.004, 2);
// => 6.01

_.ceil(6040, -2);
// => 6100
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_floorn-precision0"></a>`_.floor(n, [precision=0])`
<a href="#_floorn-precision0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11849 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.floor "See the npm package")

根据 `precision` 计算 `n` 的舍位四舍五入值.

#### 参数
1. `n` *(number)*: 需要计算的值.
2. `[precision=0]` *(number)*: 需要提供的精度.

#### 返回值
*(number)*:  返回计算后的值.

#### 示例
```js
_.floor(4.006);
// => 4

_.floor(0.046, 2);
// => 0.04

_.floor(4060, -2);
// => 4000
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_maxcollection-iteratee-thisarg"></a>`_.max(collection, [iteratee], [thisArg])`
<a href="#_maxcollection-iteratee-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11898 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.max "See the npm package")

返回 `collection` 中值的最大值. 如果 `collection` 为空或者为假值则返回 `-Infinity`.
如果提供了迭代器，则迭代器返回的结果作为值的排名依据.
`iteratee` 被绑定在 `thisArg` 并在被调用时传递三个参数: (value, index, collection).
<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(&#42;)*:  返回最大值.

#### 示例
```js
_.max([4, 2, 8, 6]);
// => 8

_.max([]);
// => -Infinity

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

_.max(users, function(chr) {
  return chr.age;
});
// => { 'user': 'fred', 'age': 40 }

// using the `_.property` callback shorthand
_.max(users, 'age');
// => { 'user': 'fred', 'age': 40 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mincollection-iteratee-thisarg"></a>`_.min(collection, [iteratee], [thisArg])`
<a href="#_mincollection-iteratee-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11947 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.min "See the npm package")

获取 `collection` 中的最小值.如果 `collection` 为空或者假值,则返回 `Infinity`.
如果提供了迭代器，则迭代器返回的结果将作为值的排序依据.
`iteratee` 被绑定在 `thisArg` 并在被调用时传递三个参数: (value, index, collection).
<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(&#42;)*:  返回最小值.

#### 示例
```js
_.min([4, 2, 8, 6]);
// => 2

_.min([]);
// => Infinity

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

_.min(users, function(chr) {
  return chr.age;
});
// => { 'user': 'barney', 'age': 36 }

// using the `_.property` callback shorthand
_.min(users, 'age');
// => { 'user': 'barney', 'age': 36 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_roundn-precision0"></a>`_.round(n, [precision=0])`
<a href="#_roundn-precision0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11969 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.round "See the npm package")

根据 `precision` 计算 `n` 的四舍五入值.

#### 参数
1. `n` *(number)*: 需要四舍五入的值.
2. `[precision=0]` *(number)*: 需要提供的精度.

#### 返回值
*(number)*:  返回四舍五入后的值.

#### 示例
```js
_.round(4.006);
// => 4

_.round(4.006, 2);
// => 4.01

_.round(4060, -2);
// => 4100
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sumcollection-iteratee-thisarg"></a>`_.sum(collection, [iteratee], [thisArg])`
<a href="#_sumcollection-iteratee-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L12003 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sum "See the npm package")

计算 `collection` 中 **值** 的和.

#### 参数
1. `collection` *(Array|Object|string)*: 待检索的集合.
2. `[iteratee]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(number)*:  返回计算结果.

#### 示例
```js
_.sum([4, 6]);
// => 10

_.sum({ 'a': 4, 'b': 6 });
// => 10

var objects = [
  { 'n': 4 },
  { 'n': 6 }
];

_.sum(objects, function(object) {
  return object.n;
});
// => 10

// using the `_.property` callback shorthand
_.sum(objects, 'n');
// => 10
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Number” Methods`

<!-- div -->

### <a id="_inrangen-start0-end"></a>`_.inRange(n, [start=0], end)`
<a href="#_inrangen-start0-end">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10321 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.inrange "See the npm package")

检查 `n` 是否 在 `start` 和 `end` 之间的数值.检查不包含 `end`.
如果没有特殊指定 `end` 则 `start` 被设置为 `0`, `end` 被设置为原 `start`.
Checks if `n` is between `start` and up to but not including, `end`. If
`end` is not specified it's set to `start` with `start` then set to `0`.

#### 参数
1. `n` *(number)*: 待检查的数值.
2. `[start=0]` *(number)*: 范围的起始点.
3. `end` *(number)*: 范围的结束点.

#### 返回值
*(boolean)*: 如果 `n` 在范围内返回 `true`, 否则返回 `false`.

#### 示例
```js
_.inRange(3, 2, 4);
// => true

_.inRange(4, 8);
// => true

_.inRange(4, 2);
// => false

_.inRange(2, 2);
// => false

_.inRange(1.2, 2);
// => true

_.inRange(5.2, 4);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_randommin0-max1-floating"></a>`_.random([min=0], [max=1], [floating])`
<a href="#_randommin0-max1-floating">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10359 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.random "See the npm package")

产生 `min` 和 `max` 间的随机数(包含min和max).如果只提供了1个参数，则返回 `0` 到所提供参数间的随机值.
如果 `floating` 为 `tru`,或者 `min` 或  `max` 其中一个值为浮点数，则返回随机值为浮点数值.

#### 参数
1. `[min=0]` *(number)*:  允许的最小值.
2. `[max=1]` *(number)*: 允许的最大值.
3. `[floating]` *(boolean)*: 是否返回浮点数.

#### 返回值
*(number)*:  返回一个随机值.

#### 示例
```js
_.random(0, 5);
// => an integer between 0 and 5

_.random(5);
// => also an integer between 0 and 5

_.random(5, true);
// => a floating-point number between 0 and 5

_.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Object” Methods`

<!-- div -->

### <a id="_assignobject-sources-customizer-thisarg"></a>`_.assign(object, [sources], [customizer], [thisArg])`
<a href="#_assignobject-sources-customizer-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9372 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.assign "See the npm package")

分配来源对象的枚举属性到目标对象.源对象属性会覆盖以前分配的属性.
如果 `customizer` 被提供，则它将修正分配值.
`customizer` 被绑定在 `thisArg`并在被调用时传递三个参数: <br>(objectValue, sourceValue, key, object, source).
<br>
<br>
**Note:** 该函数基于[`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign)并会突变 `Object`.

#### Aliases
*_.extend*

#### 参数
1. `object` *(Object)*: 目标对象.
2. `[sources]` *(...Object)*:  来源对象.
3. `[customizer]` *(Function)*: 定制化函数.
4. `[thisArg]` *(&#42;)*: The `this` 绑定 `customizer`.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
_.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
// => { 'user': 'fred', 'age': 40 }

// using a customizer callback
var defaults = _.partialRight(_.assign, function(value, other) {
  return _.isUndefined(value) ? other : value;
});

defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
// => { 'user': 'barney', 'age': 36 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_createprototype-properties"></a>`_.create(prototype, [properties])`
<a href="#_createprototype-properties">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9412 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.create "See the npm package")

创建一个对象继承给予的 `prototype` 对象.
如果 `properties` 对象被提供，它的枚举属性将分配到创建的对象.

#### 参数
1. `prototype` *(Object)*: 待继承的对象.
2. `[properties]` *(Object)*: 待分配的属性.

#### 返回值
*(Object)*:  返回生成的对象.

#### 示例
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});

var circle = new Circle;
circle instanceof Circle;
// => true

circle instanceof Shape;
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_defaultsobject-sources"></a>`_.defaults(object, [sources])`
<a href="#_defaultsobject-sources">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9438 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.defaults "See the npm package")

分配来源对象的枚举属性到目标对象。如果被分配的属性在目标对象的属性集中为 `undefined`，
则目标对象接收.目标对象会忽略接收已存在的属性.
<br>
<br>
**Note:** 该方法会突变目标 `object`.

#### 参数
1. `object` *(Object)*: 目标对象.
2. `[sources]` *(...Object)*: 来源对象.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
_.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
// => { 'user': 'barney', 'age': 36 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_defaultsdeepobject-sources"></a>`_.defaultsDeep(object, [sources])`
<a href="#_defaultsdeepobject-sources">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9458 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.defaultsdeep "See the npm package")

该方法类似 `_.defaults` 只不过它递归分配默认的特性.
<br>
<br>
**Note:** 该方法突变目标 `object`.

#### 参数
1. `object` *(Object)*: 目标对象.
2. `[sources]` *(...Object)*: 来源对象.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
_.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
// => { 'user': { 'name': 'barney', 'age': 36 } }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findkeyobject-predicate_identity-thisarg"></a>`_.findKey(object, [predicate=_.identity], [thisArg])`
<a href="#_findkeyobject-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9508 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findkey "See the npm package")

该方法类似 `_.find` 只不过它返回的是首次返回真值的 `predicate` 所对应的元素键.
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `object` *(Object)*: 待搜索的对象.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(string|undefined)*:  返回所匹配的元素的键, 否则返回 `undefined`.

#### 示例
```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findKey(users, function(chr) {
  return chr.age < 40;
});
// => 'barney' (iteration order is not guaranteed)

// using the `_.matches` callback shorthand
_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'

// using the `_.matchesProperty` callback shorthand
_.findKey(users, 'active', false);
// => 'fred'

// using the `_.property` callback shorthand
_.findKey(users, 'active');
// => 'barney'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findlastkeyobject-predicate_identity-thisarg"></a>`_.findLastKey(object, [predicate=_.identity], [thisArg])`
<a href="#_findlastkeyobject-predicate_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9558 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findlastkey "See the npm package")

该方法类似 `_.findKey` 只不过它遍历集合的顺序是反向的
<br>
<br>
如果为 `断言` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `断言` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `object` *(Object)*: 待搜索的对象.
2. `[predicate=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(string|undefined)*:  返回所匹配元素的键，否则返回 `undefined`.

#### 示例
```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findLastKey(users, function(chr) {
  return chr.age < 40;
});
// => returns `pebbles` assuming `_.findKey` returns `barney`

// using the `_.matches` callback shorthand
_.findLastKey(users, { 'age': 36, 'active': true });
// => 'barney'

// using the `_.matchesProperty` callback shorthand
_.findLastKey(users, 'active', false);
// => 'fred'

// using the `_.property` callback shorthand
_.findLastKey(users, 'active');
// => 'pebbles'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_forinobject-iteratee_identity-thisarg"></a>`_.forIn(object, [iteratee=_.identity], [thisArg])`
<a href="#_forinobject-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9587 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.forin "See the npm package")

迭代遍历目标对象所有继承的和自己拥有的枚举的属性.
`iteratee` 被绑定在 `thisArg` 并在被调用时传递三个参数: (value, key, object).
迭代器如果被明确的返回 `false` 则会退出迭代.

#### 参数
1. `object` *(Object)*: 目标对象.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forIn(new Foo, function(value, key) {
  console.log(key);
});
// => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_forinrightobject-iteratee_identity-thisarg"></a>`_.forInRight(object, [iteratee=_.identity], [thisArg])`
<a href="#_forinrightobject-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9614 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.forinright "See the npm package")

该方法类似 `_.forIn` 只不过它迭代特性的方式是反向的.

#### 参数
1. `object` *(Object)*: 目标对象.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forInRight(new Foo, function(value, key) {
  console.log(key);
});
// => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_forownobject-iteratee_identity-thisarg"></a>`_.forOwn(object, [iteratee=_.identity], [thisArg])`
<a href="#_forownobject-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9643 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.forown "See the npm package")

迭代遍历所有对象自己拥有的属性.
`
Iterates over own enumerable properties of an object invoking `iteratee`
for each property. `iteratee` 被绑定在 `thisArg` 并在被调用时传递三个参数: (value, key, object).
迭代器如果被明确的返回 `false` 则会退出迭代.

#### 参数
1. `object` *(Object)*: 待迭代的对象.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => logs 'a' and 'b' (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_forownrightobject-iteratee_identity-thisarg"></a>`_.forOwnRight(object, [iteratee=_.identity], [thisArg])`
<a href="#_forownrightobject-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9670 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.forownright "See the npm package")

该方法类似 `_.forOwn` 只不过它迭代对象的属性的方向是反向的.

#### 参数
1. `object` *(Object)*: 待迭代的对象.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwnRight(new Foo, function(value, key) {
  console.log(key);
});
// => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_functionsobject"></a>`_.functions(object)`
<a href="#_functionsobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9687 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.functions "See the npm package")

返回一个数组，该数组包含所目标对象所拥有的或继承的函数的名称.

#### Aliases
*_.methods*

#### 参数
1. `object` *(Object)*: 待检索的对象.

#### 返回值
*(Array)*:  返回一个新的包含所有特性名称的数组.

#### 示例
```js
_.functions(_);
// => ['after', 'ary', 'assign', ...]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_getobject-path-defaultvalue"></a>`_.get(object, path, [defaultValue])`
<a href="#_getobject-path-defaultvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9715 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.get "See the npm package")

以 `path` 的方式获取对象的属性值.如果解析的值为 `undefined`，则使用 `defaultValue` 替代.

#### 参数
1. `object` *(Object)*: 待执行的对象.
2. `path` *(Array|string)*: 需要获取的属性的路径.
3. `[defaultValue]` *(&#42;)*: `undefined` 替换的默认值.

#### 返回值
*(&#42;)*:  返回解析后的值.

#### 示例
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

_.get(object, 'a[0].b.c');
// => 3

_.get(object, ['a', '0', 'b', 'c']);
// => 3

_.get(object, 'a.b.c', 'default');
// => 'default'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_hasobject-path"></a>`_.has(object, path)`
<a href="#_hasobject-path">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9742 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.has "See the npm package")

检查 `path` 是否正确的路径.

#### 参数
1. `object` *(Object)*: 待执行的对象.
2. `path` *(Array|string)*: 需要检查的路径.

#### 返回值
*(boolean)*:  返回 `true` 如果 `path` 是正确的路径,否则返回 `false`.

#### 示例
```js
var object = { 'a': { 'b': { 'c': 3 } } };

_.has(object, 'a');
// => true

_.has(object, 'a.b.c');
// => true

_.has(object, ['a', 'b', 'c']);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_invertobject-multivalue"></a>`_.invert(object, [multiValue])`
<a href="#_invertobject-multivalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9783 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.invert "See the npm package")

根据目标函数创建一个键值对倒置的对象.
如果 `object` 包含了重复的值.后续的值将覆盖前面的值.
如果提供了 `multiValue` 为 `true`，则后续的值不会覆盖前面的值，而是组成数组.

#### 参数
1. `object` *(Object)*: 待倒置的对象.
2. `[multiValue]` *(boolean)*: 是否允许重复值.

#### 返回值
*(Object)*:  返回倒置后的新对象.

#### 示例
```js
var object = { 'a': 1, 'b': 2, 'c': 1 };

_.invert(object);
// => { '1': 'c', '2': 'b' }

// with `multiValue`
_.invert(object, true);
// => { '1': ['a', 'c'], '2': ['b'] }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_keysobject"></a>`_.keys(object)`
<a href="#_keysobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9837 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.keys "See the npm package")

创建一个数组，该数组包含所有目标对象自己所拥有的枚举属性的名称.
<br>
<br>
**Note:** 非对象类型将被强制转换为对象,更多详情[ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)

#### 参数
1. `object` *(Object)*: 待执行的对象.

#### 返回值
*(Array)*:  返回一个包含所有枚举属性名称的数组.

#### 示例
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)

_.keys('hi');
// => ['0', '1']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_keysinobject"></a>`_.keysIn(object)`
<a href="#_keysinobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9868 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.keysin "See the npm package")

创建一个数组，该数组包含目标对象所有自己拥有或者继承来的枚举属性的名称.
<br>
<br>
**Note:** 非对象的值将被强制转换为对象.

#### 参数
1. `object` *(Object)*: 待执行的对象.

#### 返回值
*(Array)*:  返回包含所有属性名称的数组.

#### 示例
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keysIn(new Foo);
// => ['a', 'b', 'c'] (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mapkeysobject-iteratee_identity-thisarg"></a>`_.mapKeys(object, [iteratee=_.identity], [thisArg])`
<a href="#_mapkeysobject-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9945 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.mapkeys "See the npm package")

该函数与 `_.mapValues` 相反.该函数创建一个对象，该对象与原对象值相同，
但键是依据迭代器的结果生成的.

#### 参数
1. `object` *(Object)*: 待迭代的对象.
2. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回映射后的新对象.

#### 示例
```js
_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mapvaluesobject-iteratee_identity-thisarg"></a>`_.mapValues(object, [iteratee=_.identity], [thisArg])`
<a href="#_mapvaluesobject-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9988 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.mapvalues "See the npm package")

创建一个对象，该对象与原对象拥有相同的键,但是值是依据迭代器返回的结果生成.
迭代器被绑定在 `thisArg` 并在被调用时传递三个参数:<br>
(value, key, object).
<br>
<br>
如果为 `迭代器` 提供的值是属性名称,则自动创建 `_.property` 回调函数，该回调函数返回元素的属性值.
<br>
<br>
如果也提供了 `thisArg` 参数,则自动创建 `_matchesProperty` 回调函数,如果该回调函数匹配到元素值,则返回 `true` ,否则返回 `false`.
<br>
<br>
如果为 `迭代器` 提供的是一个对象，则自动创建 `_.matches` 回调函数,如果该回调函数匹配到对象所有的属性值,则返回 `true`,否则返回 `false`.

#### 参数
1. `object` *(Object)*: 待迭代的对象.
2. `[iteratee=_.identity]` *(Function|Object|string)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回映射后的新对象.

#### 示例
```js
_.mapValues({ 'a': 1, 'b': 2 }, function(n) {
  return n * 3;
});
// => { 'a': 3, 'b': 6 }

var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

// using the `_.property` callback shorthand
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mergeobject-sources-customizer-thisarg"></a>`_.merge(object, [sources], [customizer], [thisArg])`
<a href="#_mergeobject-sources-customizer-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L9338 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.merge "See the npm package")

递归合并来源对象自身拥有的枚举属性.不支持 `undefined` 为目标对象.
后续的来源对象属性会覆盖之前分配的属性.
如果 `customizer` 被提供，则它将被调用来产生合并后的值.
如果 `customizer` 返回 `undefined` 则 `customizer` 只做处理，并不产生合并结果.
`customizer` 被绑定在 `thisArg` 并在被调用时传递五个参数:<br>
(objectValue, sourceValue, key, object, source).

**NOTE**: 该函数突变目标 `Object`. 

#### 参数
1. `object` *(Object)*: 目标对象.
2. `[sources]` *(...Object)*: 来源对象.
3. `[customizer]` *(Function)*: 定制化合并函数.
4. `[thisArg]` *(&#42;)*: The `this` 绑定 `customizer`.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
var users = {
  'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
};

var ages = {
  'data': [{ 'age': 36 }, { 'age': 40 }]
};

_.merge(users, ages);
// => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }

// using a customizer callback
var object = {
  'fruits': ['apple'],
  'vegetables': ['beet']
};

var other = {
  'fruits': ['banana'],
  'vegetables': ['carrot']
};

_.merge(object, other, function(a, b) {
  if (_.isArray(a)) {
    return a.concat(b);
  }
});
// => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_omitobject-predicate-thisarg"></a>`_.omit(object, [predicate], [thisArg])`
<a href="#_omitobject-predicate-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10013 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.omit "See the npm package")

该方法与 `_.pick` 相反.该函数创建的对象返回除被忽略的属性之外的所有自身拥有和继承的属性.

#### 参数
1. `object` *(Object)*:  来源对象.
2. `[predicate]` *(Function|...(string|string&#91;&#93;)*: 断定被忽略的名称.可以是迭代器或字符串或字符串队列.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回新的对象.

#### 示例
```js
var object = { 'user': 'fred', 'age': 40 };

_.omit(object, 'age');
// => { 'user': 'fred' }

_.omit(object, _.isNumber);
// => { 'user': 'fred' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pairsobject"></a>`_.pairs(object)`
<a href="#_pairsobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10041 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pairs "See the npm package")

返回一个键值对组成的数组.
类似 `[[key1, value1], [key2, value2]]`.

#### 参数
1. `object` *(Object)*: 待执行的对象.

#### 返回值
*(Array)*: 返回一个包含对象键值对所组成的数组.

#### 示例
```js
_.pairs({ 'barney': 36, 'fred': 40 });
// => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pickobject-predicate-thisarg"></a>`_.pick(object, [predicate], [thisArg])`
<a href="#_pickobject-predicate-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10082 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pick "See the npm package")

创建一个对象，该对象由 `object` 选中的属性组成.
属性名称可以是明确的个别参数或者属性名称所组成的数组.
如果 `predicate` 被提供，则它所返回的结果将作为属性的选取依据直到返回假值.
断言被绑定在 `thisArg` 并在被调用时传递三个参数: (value, key, object).

#### 参数
1. `object` *(Object)*: 来源对象.
2. `[predicate]` *(Function|...(string|string&#91;&#93;)*: 被迭代调用返回选取属性的断言函数，或者属性名称，或者属性名称队列.
3. `[thisArg]` *(&#42;)*: 断言中的 `this` 所绑定的对象.

#### 返回值
*(Object)*:  返回一个新的对象.

#### 示例
```js
var object = { 'user': 'fred', 'age': 40 };

_.pick(object, 'user');
// => { 'user': 'fred' }

_.pick(object, _.isString);
// => { 'user': 'fred' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_resultobject-path-defaultvalue"></a>`_.result(object, path, [defaultValue])`
<a href="#_resultobject-path-defaultvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10119 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.result "See the npm package")

该方法类似 `_.get`, 只不过 如果解析得到的值是一个方法，则该方法将被调用并绑定 `this` 到它的父对象，并返回结果.

#### 参数
1. `object` *(Object)*: 待执行的对象.
2. `path` *(Array|string)*:  待解析的路径.
3. `[defaultValue]` *(&#42;)*: `undefined` 替换的默认值.

#### 返回值
*(&#42;)*:  返回解析后的值.

#### 示例
```js
var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };

_.result(object, 'a[0].b.c1');
// => 3

_.result(object, 'a[0].b.c2');
// => 4

_.result(object, 'a.b.c', 'default');
// => 'default'

_.result(object, 'a.b.c', _.constant('default'));
// => 'default'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_setobject-path-value"></a>`_.set(object, path, value)`
<a href="#_setobject-path-value">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10155 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.set "See the npm package")

设置对象的路径上的属性值.如果路径不存在，则创建它.

#### 参数
1. `object` *(Object)*: 待扩大的对象.
2. `path` *(Array|string)*: 属性路径.
3. `value` *(&#42;)*: 需要设置的值.

#### 返回值
*(Object)*:  返回 `object`.

#### 示例
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4

_.set(object, 'x[0].y.z', 5);
console.log(object.x[0].y.z);
// => 5
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_transformobject-iteratee_identity-accumulator-thisarg"></a>`_.transform(object, [iteratee=_.identity], [accumulator], [thisArg])`
<a href="#_transformobject-iteratee_identity-accumulator-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10210 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.transform "See the npm package")

`_.reduce` 一种替代方法.该方法遍历对象的所有所有自身拥有的属性，并返回累加器最终返回的值.
迭代器会在明确返回 `false` 时提早结束.
`iteratee` 被绑定在 `thisArg` 并在被调用时传递4个参数: (accumulator,value,key,object).

#### 参数
1. `object` *(Array|Object)*: 待转换的对象.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[accumulator]` *(&#42;)*: 定制化叠加器.
4. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(&#42;)*:  返回累加后的值.

#### 示例
```js
_.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
});
// => [4, 9]

_.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
  result[key] = n * 3;
});
// => { 'a': 3, 'b': 6 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_valuesobject"></a>`_.values(object)`
<a href="#_valuesobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10257 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.values "See the npm package")

返回一个包含对象所有自身拥有枚举属性值的数组.
<br>
<br>
**Note:** 非对象值会被强制转换为对象.

#### 参数
1. `object` *(Object)*: 待执行的对象.

#### 返回值
*(Array)*:  返回一个包含所有属性值的数组.

#### 示例
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.values(new Foo);
// => [1, 2] (iteration order is not guaranteed)

_.values('hi');
// => ['h', 'i']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_valuesinobject"></a>`_.valuesIn(object)`
<a href="#_valuesinobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10284 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.valuesin "See the npm package")

创建一个包含对象所有自身拥有和继承的枚举属性值的数组.
<br>
<br>
**Note:** 非对象值会被强制转换为对象.

#### 参数
1. `object` *(Object)*: 待执行的对象.

#### 返回值
*(Array)*:  返回包含所有属性值的数组.

#### 示例
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.valuesIn(new Foo);
// => [1, 2, 3] (iteration order <i></i>s not guaranteed)
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“String” Methods`

<!-- div -->

### <a id="_camelcasestring"></a>`_.camelCase([string=''])`
<a href="#_camelcasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10415 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.camelcase "See the npm package")

转换 `string` 为小驼峰写法[camel case](https://en.wikipedia.org/wiki/CamelCase).

#### 参数
1. `[string='']` *(string)*: The string to convert.

#### 返回值
*(string)*:  返回转换后的字符串.

#### 示例
```js
_.camelCase('Foo Bar');
// => 'fooBar'

_.camelCase('--foo-bar');
// => 'fooBar'

_.camelCase('__foo_bar__');
// => 'fooBar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_capitalizestring"></a>`_.capitalize([string=''])`
<a href="#_capitalizestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10433 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.capitalize "See the npm package")

大写 `string` 的首字符.

#### 参数
1. `[string='']` *(string)*: The string to capitalize.

#### 返回值
*(string)*:  返回转换后的字符串.

#### 示例
```js
_.capitalize('fred');
// => 'Fred'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_deburrstring"></a>`_.deburr([string=''])`
<a href="#_deburrstring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10452 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.deburr "See the npm package")

转换 [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table) 为基本的拉丁字母并删除[combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).

#### 参数
1. `[string='']` *(string)*: The string to deburr.

#### 返回值
*(string)*:  返回转换后的字符串.

#### 示例
```js
_.deburr('déjà vu');
// => 'deja vu'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_endswithstring-target-positionstringlength"></a>`_.endsWith([string=''], [target], [position=string.length])`
<a href="#_endswithstring-target-positionstringlength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10478 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.endswith "See the npm package")

检查 `string` 是否已给定的字符串结尾.

#### 参数
1. `[string='']` *(string)*: 待检索的字符串.
2. `[target]` *(string)*: 目标字符串.
3. `[position=string.length]` *(number)*: 要检索的位置.

#### 返回值
*(boolean)*:  返回 `true` 如果 `string` 以 `target` 结尾, 否则返回 `false`.

#### 示例
```js
_.endsWith('abc', 'c');
// => true

_.endsWith('abc', 'b');
// => false

_.endsWith('abc', 'b', 2);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_escapestring"></a>`_.escape([string=''])`
<a href="#_escapestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10523 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.escape "See the npm package")

转换字符 "&", "<", ">", '"', "'", and "\`" 为相应的 HTML实体字符.
<br>
<br>
**Note:** 不会转义其他字符.如果需要转移其它字符可以使用第三方库，类似[_he_](https://mths.be/he).
<br>
<br>
Though the ">" character is escaped for symmetry, characters like
">" and "/" don't need escaping in HTML and have no special meaning
unless they're part of a tag or unquoted attribute value.
See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
(under "semi-related fun fact") for more details.
<br>
<br>
Backticks are escaped because in Internet Explorer < 9, they can break out
of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
[#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
[#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
for more details.
<br>
<br>
当解析为html时应总是[quote attribute values](http://wonko.com/post/html-escaping)
以减少XSS的可能性.

#### 参数
1. `[string='']` *(string)*: The string to escape.

#### 返回值
*(string)*: 返回转义后的字符串.

#### 示例
```js
_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_escaperegexpstring"></a>`_.escapeRegExp([string=''])`
<a href="#_escaperegexpstring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10545 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.escaperegexp "See the npm package")

转义 `RegExp` 中特别的字符如 "\", "/", "^", "$", ".", "|", "?",
"*", "+", "(", ")", "[", "]", "{" and "}".

#### 参数
1. `[string='']` *(string)*: The string to escape.

#### 返回值
*(string)*:  返回转义后的字符串.

#### 示例
```js
_.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https:\/\/lodash\.com\/\)'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_kebabcasestring"></a>`_.kebabCase([string=''])`
<a href="#_kebabcasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10571 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.kebabcase "See the npm package")

转移字符串为串联方式([kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)).

#### 参数
1. `[string='']` *(string)*: The string to convert.

#### 返回值
*(string)*:  返回串联后的字符串.

#### 示例
```js
_.kebabCase('Foo Bar');
// => 'foo-bar'

_.kebabCase('fooBar');
// => 'foo-bar'

_.kebabCase('__foo_bar__');
// => 'foo-bar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_padstring-length0-chars"></a>`_.pad([string=''], [length=0], [chars=' '])`
<a href="#_padstring-length0-chars">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10597 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pad "See the npm package")

如果字符串的长度短于 `length`，则在字符串的两边填充字符.
如果填充的字符相对于 `length` 不能均等的分配，则进行截取.

#### 参数
1. `[string='']` *(string)*: 待填充的字符串.
2. `[length=0]` *(number)*:  需要填充的字符串长度界限.
3. `[chars=' ']` *(string)*: 往字符串中填充的字符.

#### 返回值
*(string)*:  返回填充后的字符串.

#### 示例
```js
_.pad('abc', 8);
// => '  abc   '

_.pad('abc', 8, '_-');
// => '_-abc_-_'

_.pad('abc', 3);
// => 'abc'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_padleftstring-length0-chars"></a>`_.padLeft([string=''], [length=0], [chars=' '])`
<a href="#_padleftstring-length0-chars">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10635 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.padleft "See the npm package")

如果字符串的长度短于 `length`，则在字符串的左边填充字符.
如果填充的字符相对于 `length` 不能均等的分配，则进行截取.

#### 参数
1. `[string='']` *(string)*: 待填充的字符串.
2. `[length=0]` *(number)*:  需要填充的字符串长度界限.
3. `[chars=' ']` *(string)*: 往字符串中填充的字符.

#### 返回值
*(string)*:  返回填充后的字符串.

#### 示例
```js
_.padLeft('abc', 6);
// => '   abc'

_.padLeft('abc', 6, '_-');
// => '_-_abc'

_.padLeft('abc', 3);
// => 'abc'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_padrightstring-length0-chars"></a>`_.padRight([string=''], [length=0], [chars=' '])`
<a href="#_padrightstring-length0-chars">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10659 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.padright "See the npm package")

如果字符串的长度短于 `length`，则在字符串的右边填充字符.
如果填充的字符相对于 `length` 不能均等的分配，则进行截取.

#### 参数
1. `[string='']` *(string)*: 待填充的字符串.
2. `[length=0]` *(number)*:  需要填充的字符串长度界限.
3. `[chars=' ']` *(string)*: 往字符串中填充的字符.

#### 返回值
*(string)*:  返回填充后的字符串.

#### 示例
```js
_.padRight('abc', 6);
// => 'abc   '

_.padRight('abc', 6, '_-');
// => 'abc_-_'

_.padRight('abc', 3);
// => 'abc'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_parseintstring-radix"></a>`_.parseInt(string, [radix])`
<a href="#_parseintstring-radix">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10684 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.parseint "See the npm package")

以指定的基数来将 `string` 转换为相应的整数.
如果 `radix` 为 `undefined` 或者 `0`,则默认使用 `10` 为 `radix` 除非值为16进制数.
则指定 `radix` 为 `16`.
<br>
<br>
**Note:** 该函数与 [ES5 implementation](https://es5.github.io/#E)
的 `parseInt` 一致.

#### 参数
1. `string` *(string)*:  待转义的字符串.
2. `[radix]` *(number)*: 转义的基数.

#### 返回值
*(number)*:  返回转义后的整数.

#### 示例
```js
_.parseInt('08');
// => 8

_.map(['6', '08', '10'], _.parseInt);
// => [6, 8, 10]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_repeatstring-n0"></a>`_.repeat([string=''], [n=0])`
<a href="#_repeatstring-n0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10717 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.repeat "See the npm package")

重复给定的字符串 `n` 次.

#### 参数
1. `[string='']` *(string)*: The string to repeat.
2. `[n=0]` *(number)*: The number of times to repeat the string.

#### 返回值
*(string)*:  返回重复后的字符串.

#### 示例
```js
_.repeat('*', 3);
// => '***'

_.repeat('abc', 2);
// => 'abcabc'

_.repeat('abc', 0);
// => ''
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_snakecasestring"></a>`_.snakeCase([string=''])`
<a href="#_snakecasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10756 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.snakecase "See the npm package")

转换字符串为蛇形字符串([snake case](https://en.wikipedia.org/wiki/Snake_case)).

#### 参数
1. `[string='']` *(string)*: The string to convert.

#### 返回值
*(string)*:  返回转换后的字符串.

#### 示例
```js
_.snakeCase('Foo Bar');
// => 'foo_bar'

_.snakeCase('fooBar');
// => 'foo_bar'

_.snakeCase('--foo-bar');
// => 'foo_bar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_startcasestring"></a>`_.startCase([string=''])`
<a href="#_startcasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10779 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.startcase "See the npm package")

转换字符串形式为 [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).

#### 参数
1. `[string='']` *(string)*: The string to convert.

#### 返回值
*(string)*: 返回转换后的字符串.

#### 示例
```js
_.startCase('--foo-bar');
// => 'Foo Bar'

_.startCase('fooBar');
// => 'Foo Bar'

_.startCase('__foo_bar__');
// => 'Foo Bar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_startswithstring-target-position0"></a>`_.startsWith([string=''], [target], [position=0])`
<a href="#_startswithstring-target-position0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10804 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.startswith "See the npm package")

检查 `string` 是否以 `target` 为起始.

#### 参数
1. `[string='']` *(string)*: 待检索的字符串. 
2. `[target]` *(string)*: 目标字符.
3. `[position=0]` *(number)*: 检索的位置.

#### 返回值
*(boolean)*:  返回 `true` 如果 `string` 以 `target` 开始, 否则返回 `false`.

#### 示例
```js
_.startsWith('abc', 'a');
// => true

_.startsWith('abc', 'b');
// => false

_.startsWith('abc', 'b', 1);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_templatestring-options"></a>`_.template([string=''], [options])`
<a href="#_templatestring-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L10909 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.template "See the npm package")

创建一个编译模板方法.该方法可以将数据以正确的方式插入模板中相应位置.
html数据会在定界符中自动转义为html实体，定界符中的javascript也是可以被执行的.
如果设置了选项对象，则会优先覆盖 `_.templateSettings` 的值.
<br>
<br>
**Note:** 在开发过程中可以利用[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)以便于调试.
<br>
<br>
更多预编译内容请看
[lodash's custom builds documentation](https://lodash.com/custom-builds).
<br>
<br>
更多关于chrome沙箱扩展请看
[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).

#### 参数
1. `[string='']` *(string)*: 模板字符串.
2. `[options]` *(Object)*: 选项对象.
3. `[options.escape]` *(RegExp)*: html 转义定界符.
4. `[options.evaluate]` *(RegExp)*: javescript 执行定界符.
5. `[options.imports]` *(Object)*: 对象导入到模板中作为自由变量.
6. `[options.interpolate]` *(RegExp)*: 插值定界符.
7. `[options.sourceURL]` *(string)*: 模板编译的来源URL.
8. `[options.variable]` *(string)*: 数据对象变量名.

#### 返回值
*(Function)*: 返回编译后的模板方法.

#### 示例
```js
// using the "interpolate" delimiter to create a compiled template
var compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'

// using the HTML "escape" delimiter to escape data property values
var compiled = _.template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'

// using the "evaluate" delimiter to execute JavaScript and generate HTML
var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// using the internal `print` function in "evaluate" delimiters
var compiled = _.template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'

// using the ES delimiter as an alternative to the default "interpolate" delimiter
var compiled = _.template('hello ${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'

// using custom template delimiters
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiled = _.template('hello {{ user }}!');
compiled({ 'user': 'mustache' });
// => 'hello mustache!'

// using backslashes to treat delimiters as plain text
var compiled = _.template('<%= "\\<%- value %\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'

// using the `imports` option to import `jQuery` as `jq`
var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// using the `sourceURL` option to specify a custom sourceURL for the template
var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector

// using the `variable` option to ensure a with-statement isn't used in the compiled template
var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }

// using the `source` property to inline compiled templates for meaningful
// line numbers in error messages and a stack trace
fs.writeFileSync(path.join(cwd, 'jst.js'), '\
  var JST = {\
    "main": ' + _.template(mainText).source + '\
  };\
');
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_trimstring-charswhitespace"></a>`_.trim([string=''], [chars=whitespace])`
<a href="#_trimstring-charswhitespace">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11036 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.trim "See the npm package")

清除字符串的前置和后置空白或指定的字符.

#### 参数
1. `[string='']` *(string)*: 待清理的字符串 
2. `[chars=whitespace]` *(string)*: 指定的字符.

#### 返回值
*(string)*:  返回清理后的字符串.

#### 示例
```js
_.trim('  abc  ');
// => 'abc'

_.trim('-_-abc-_-', '_-');
// => 'abc'

_.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_trimleftstring-charswhitespace"></a>`_.trimLeft([string=''], [chars=whitespace])`
<a href="#_trimleftstring-charswhitespace">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11067 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.trimleft "See the npm package")

清除字符串的前置空白或指定的字符.

#### 参数
1. `[string='']` *(string)*: 待清理的字符串 
2. `[chars=whitespace]` *(string)*: 指定的字符.

#### 返回值
*(string)*:  返回清理后的字符串.

#### 示例
```js
_.trimLeft('  abc  ');
// => 'abc  '

_.trimLeft('-_-abc-_-', '_-');
// => 'abc-_-'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_trimrightstring-charswhitespace"></a>`_.trimRight([string=''], [chars=whitespace])`
<a href="#_trimrightstring-charswhitespace">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11097 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.trimright "See the npm package")

清除字符串的后置空白或指定的字符.

#### 参数
1. `[string='']` *(string)*: 待清理的字符串 
2. `[chars=whitespace]` *(string)*: 指定的字符.

#### 返回值
*(string)*:  返回清理后的字符串.

#### 示例
```js
_.trimRight('  abc  ');
// => '  abc'

_.trimRight('-_-abc-_-', '_-');
// => '-_-abc'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_truncstring-options-optionslength30-optionsomission-optionsseparator"></a>`_.trunc([string=''], [options], [options.length=30], [options.omission='...'], [options.separator])`
<a href="#_truncstring-options-optionslength30-optionsomission-optionsseparator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11149 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.trunc "See the npm package")

截断字符串，如果字符串的长度超出了给定的最大长度.
最终被截断的字符串的最后的字符会被 `omission` 替换，默认为 "...".

#### 参数
1. `[string='']` *(string)*: 待截取的字符串.
2. `[options]` *(Object|number)*: 选项对象或最大长度值.
3. `[options.length=30]` *(number)*: 最大长度.
4. `[options.omission='...']` *(string)*: 截取后的替换值.
5. `[options.separator]` *(RegExp|string)*: 截断点.

#### 返回值
*(string)*:  返回截断后的字符串.

#### 示例
```js
_.trunc('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'

_.trunc('hi-diddly-ho there, neighborino', 24);
// => 'hi-diddly-ho there, n...'

_.trunc('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-diddly-ho there,...'

_.trunc('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-diddly-ho there...'

_.trunc('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unescapestring"></a>`_.unescape([string=''])`
<a href="#_unescapestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11219 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unescape "See the npm package")

与 `_.escape` 相逆. 该方法转义html实体`&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;`
到相应的字符.
<br>
<br>
**Note:** No other HTML entities are unescaped. To unescape additional HTML
entities use a third-party library like [_he_](https://mths.be/he).

#### 参数
1. `[string='']` *(string)*: 待转义的字符串.

#### 返回值
*(string)*:  返回转义后的字符串.

#### 示例
```js
_.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_wordsstring-pattern"></a>`_.words([string=''], [pattern])`
<a href="#_wordsstring-pattern">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11244 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.words "See the npm package")

将字符串中的词分离组合成一个数组.

#### 参数
1. `[string='']` *(string)*: 待检索的字符串.
2. `[pattern]` *(RegExp|string)*: 匹配的模式.

#### 返回值
*(Array)*:  返回分离后组成的数组.

#### 示例
```js
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']

_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Utility” Methods`

<!-- div -->

### <a id="_attemptfunc"></a>`_.attempt(func)`
<a href="#_attemptfunc">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11274 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.attempt "See the npm package")

尝试调用 `func`.返回 `func` 返回的结果或错误对象.任何多余的参数都会在被调用时传递给 `func`.

#### 参数
1. `func` *(Function)*: 尝试调用的函数.

#### 返回值
*(&#42;)*:  返回 `func` 返回的结果或错误对象.

#### 示例
```js
// avoid throwing errors for invalid selectors
var elements = _.attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');

if (_.isError(elements)) {
  elements = [];
}
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_callbackfunc_identity-thisarg"></a>`_.callback([func=_.identity], [thisArg])`
<a href="#_callbackfunc_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11320 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.callback "See the npm package")

创建一个函数.该函数调用 `func` 并且 `this` 绑定 `thisArg`,创建的函数将参数集传递给 `func`. 
如果 `func` 是一个属性名称，则创建的回调函数返回给定的元素的属性值.
如果 `func` 是一个对象，如果对象中能找到匹配的元素则返回 `true,否则返回 `fales`.

#### Aliases
*_.iteratee*

#### 参数
1. `[func=_.identity]` *(&#42;)*: 需要转换为回调函数的值..
2. `[thisArg]` *(&#42;)*: The `this` 绑定 `func`.

#### 返回值
*(Function)*:  返回回调函数.

#### 示例
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// wrap to create custom callback shorthands
_.callback = _.wrap(_.callback, function(callback, func, thisArg) {
  var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
  if (!match) {
    return callback(func, thisArg);
  }
  return function(object) {
    return match[2] == 'gt'
      ? object[match[1]] > match[3]
      : object[match[1]] < match[3];
  };
});

_.filter(users, 'age__gt36');
// => [{ 'user': 'fred', 'age': 40 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_constantvalue"></a>`_.constant(value)`
<a href="#_constantvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11345 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.constant "See the npm package")

创建一个函数来返回 `value`.

#### 参数
1. `value` *(&#42;)*: The value to return from the new function.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var object = { 'user': 'fred' };
var getter = _.constant(object);

getter() === object;
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_identityvalue"></a>`_.identity(value)`
<a href="#_identityvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11366 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.identity "See the npm package")

该方法返回所提供的首个参数.

#### 参数
1. `value` *(&#42;)*: Any value.

#### 返回值
*(&#42;)*:  返回 `value`.

#### 示例
```js
var object = { 'user': 'fred' };

_.identity(object) === object;
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_matchessource"></a>`_.matches(source)`
<a href="#_matchessource">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11395 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.matches "See the npm package")

创建一个方法来执行深度比较所给对象与来源对象，如果所给对象具有相同的属性值，则返回 `true`,否则返回 `false`.
<br>
<br>
**Note:** 该方法支持的比较有数组，布尔值，日期对象，数值，对象，正则表达式，和字符串.
对象比较对象所有自身拥有的属性，非继承枚举的属性.
可以使用 `_.matchesProperty` 来比较单个对象自身拥有的或者继承的属性值.

#### 参数
1. `source` *(Object)*: 需要对比的源对象.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, _.matches({ 'age': 40, 'active': false }));
// => [{ 'user': 'fred', 'age': 40, 'active': false }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_matchespropertypath-srcvalue"></a>`_.matchesProperty(path, srcValue)`
<a href="#_matchespropertypath-srcvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11423 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.matchesproperty "See the npm package")

创建一个函数用来比较 `path` 上所给对象的 `value`.
<br>
<br>
**Note:** 该方法支持的比较有数组，布尔值，日期对象，数值，对象，正则表达式，和字符串.
对象比较对象所有自身拥有的属性，非继承枚举的属性.

#### 参数
1. `path` *(Array|string)*: The path of the property to get.
2. `srcValue` *(&#42;)*: The value to match.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

_.find(users, _.matchesProperty('user', 'fred'));
// => { 'user': 'fred' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_methodpath-args"></a>`_.method(path, [args])`
<a href="#_methodpath-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11450 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.method "See the npm package")

创建一个函数来调用所给对象 `path` 上的函数.任何多余的参数都会在调用时传递给被调用的函数.

#### 参数
1. `path` *(Array|string)*: 被调用函数所在对象的路径.
2. `[args]` *(...&#42;)*: 传递给调用函数的参数.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var objects = [
  { 'a': { 'b': { 'c': _.constant(2) } } },
  { 'a': { 'b': { 'c': _.constant(1) } } }
];

_.map(objects, _.method('a.b.c'));
// => [2, 1]

_.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
// => [1, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_methodofobject-args"></a>`_.methodOf(object, [args])`
<a href="#_methodofobject-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11478 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.methodof "See the npm package")

该方法与 `_.method` 相反. 该方法创建一个函数来调用所给路径上的对象的方法.
任何多余的参数都会在调用时传递给被调用的函数.

#### 参数
1. `object` *(Object)*: 待执行的对象.
2. `[args]` *(...&#42;)*: 传递给调用函数的参数.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var array = _.times(3, _.constant),
    object = { 'a': array, 'b': array, 'c': array };

_.map(['a[2]', 'c[0]'], _.methodOf(object));
// => [2, 0]

_.map([['a', '2'], ['c', '0']], _.methodOf(object));
// => [2, 0]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mixinobjectlodash-source-options"></a>`_.mixin([object=lodash], source, [options])`
<a href="#_mixinobjectlodash-source-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11520 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.mixin "See the npm package")

添加来源对象所有自身拥有的函数属性到目标函数.
如果 `object` 是一个函数,则所有方法将被添加到原型链上.
<br>
<br>
**Note:** 使用 `_.runInContext` 来创建原始的 `lodash` 函数来避免修改造成的冲突.

#### 参数
1. `[object=lodash]` *(Function|Object)*: 目标对象.
2. `source` *(Object)*: 来源对象.
3. `[options]` *(Object)*: 选项对象.
4. `[options.chain=true]` *(boolean)*: 指定被添加函数是否启用链操作.

#### 返回值
*(Function|Object)*:  返回 `object`.

#### 示例
```js
function vowels(string) {
  return _.filter(string, function(v) {
    return /[aeiou]/i.test(v);
  });
}

_.mixin({ 'vowels': vowels });
_.vowels('fred');
// => ['e']

_('fred').vowels().value();
// => ['e']

_.mixin({ 'vowels': vowels }, { 'chain': false });
_('fred').vowels();
// => ['e']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_noconflict"></a>`_.noConflict()`
<a href="#_noconflict">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11583 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.noconflict "See the npm package")

释放 `_` 为原来的值.并返回一个 `lodash` 的引用.

#### 返回值
*(Function)*:  返回 `lodash` 函数.

#### 示例
```js
var lodash = _.noConflict();
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_noop"></a>`_.noop()`
<a href="#_noop">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11602 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.noop "See the npm package")

返回 `undefined`，无论传递什么参数.

#### 示例
```js
var object = { 'user': 'fred' };

_.noop(object) === undefined;
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_propertypath"></a>`_.property(path)`
<a href="#_propertypath">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11628 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.property "See the npm package")

创建一个函数来返回所给对象在 `path` 上的值.

#### 参数
1. `path` *(Array|string)*: 属性在对象上的路径.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var objects = [
  { 'a': { 'b': { 'c': 2 } } },
  { 'a': { 'b': { 'c': 1 } } }
];

_.map(objects, _.property('a.b.c'));
// => [2, 1]

_.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
// => [1, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_propertyofobject"></a>`_.propertyOf(object)`
<a href="#_propertyofobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11652 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.propertyof "See the npm package")

与 `_.property` 相反. 该方法创建一个函数来返回所给 `path` 在对象上的属性值.

#### 参数
1. `object` *(Object)*: 待执行的对象.

#### 返回值
*(Function)*:  返回一个新的函数.

#### 示例
```js
var array = [0, 1, 2],
    object = { 'a': array, 'b': array, 'c': array };

_.map(['a[2]', 'c[0]'], _.propertyOf(object));
// => [2, 0]

_.map([['a', '2'], ['c', '0']], _.propertyOf(object));
// => [2, 0]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_rangestart0-end-step1"></a>`_.range([start=0], end, [step=1])`
<a href="#_rangestart0-end-step1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11691 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.range "See the npm package")

创建一个数组来包含所有从起始到结束(不包括)的数字(可正可负).
如果 `end` 没有被指定，则 `start` 被设置为0， `end` 被设置为原 `start`.
如果 `end` 小于 `start` 则会创建一个空的数组,除非 `step` 为负.

#### 参数
1. `[start=0]` *(number)*: 范围的起始.
2. `end` *(number)*: 范围的结尾.
3. `[step=1]` *(number)*: 范围的增量或减量.

#### 返回值
*(Array)*: 返回所有范围内的数字组成的数组. 

#### 示例
```js
_.range(4);
// => [0, 1, 2, 3]

_.range(1, 5);
// => [1, 2, 3, 4]

_.range(0, 20, 5);
// => [0, 5, 10, 15]

_.range(0, -4, -1);
// => [0, -1, -2, -3]

_.range(1, 4, 0);
// => [1, 1, 1]

_.range(0);
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_runincontextcontextroot"></a>`_.runInContext([context=root])`
<a href="#_runincontextcontextroot">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L723 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.runincontext "See the npm package")

 创建一个给定上下文对象的原始 `loadsh` 函数.

#### 参数
1. `[context=root]` *(Object)*: 上下文对象. 

#### 返回值
*(Function)*:  返回一个新的 `lodash` 函数.

#### 示例
```js
_.mixin({ 'foo': _.constant('foo') });

var lodash = _.runInContext();
lodash.mixin({ 'bar': lodash.constant('bar') });

_.isFunction(_.foo);
// => true
_.isFunction(_.bar);
// => false

lodash.isFunction(lodash.foo);
// => false
lodash.isFunction(lodash.bar);
// => true

// using `context` to mock `Date#getTime` use in `_.now`
var mock = _.runInContext({
  'Date': function() {
    return { 'getTime': getTimeMock };
  }
});

// or creating a suped-up `defer` in Node.js
var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_timesn-iteratee_identity-thisarg"></a>`_.times(n, [iteratee=_.identity], [thisArg])`
<a href="#_timesn-iteratee_identity-thisarg">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11744 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.times "See the npm package")

调用迭代器 `n` 次,每次调用返回的值都会存入数组中.
`iteratee` 被绑定在 `thisArg` 并在被调用时传递1个参数: (index).

#### 参数
1. `n` *(number)*: 调用迭代器的次数.
2. `[iteratee=_.identity]` *(Function)*: 每次迭代调用的函数.
3. `[thisArg]` *(&#42;)*: 迭代器中的 `this` 所绑定的对象.

#### 返回值
*(Array)*:  返回迭代结果所组成的数组.

#### 示例
```js
var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
// => [3, 6, 4]

_.times(3, function(n) {
  mage.castSpell(n);
});
// => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`

_.times(3, function(n) {
  this.cast(n);
}, mage);
// => also invokes `mage.castSpell(n)` three times
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_uniqueidprefix"></a>`_.uniqueId([prefix])`
<a href="#_uniqueidprefix">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L11782 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.uniqueid "See the npm package")

返回一个唯一的id,如果 `prefix` 被提供，则ID将追加在其后.

#### 参数
1. `[prefix]` *(string)*: The value to prefix the ID with.

#### 返回值
*(string)*: 返回唯一id.
	
#### 示例
```js
_.uniqueId('contact_');
// => 'contact_104'

_.uniqueId();
// => '105'
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Methods`

<!-- div -->

### <a id="_templatesettingsimports_"></a>`_.templateSettings.imports._`
<a href="#_templatesettingsimports_">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1122 "View in source") [&#x24C9;][1]

A reference to the `lodash` function.

* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Properties`

<!-- div -->

### <a id="_version"></a>`_.VERSION`
<a href="#_version">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L12300 "View in source") [&#x24C9;][1]

(string): The semantic version number.

* * *

<!-- /div -->

<!-- div -->

### <a id="_support"></a>`_.support`
<a href="#_support">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L986 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.support "See the npm package")

(Object): An object environment feature flags.

* * *

<!-- /div -->

<!-- div -->

### <a id="_supportenumerrorprops"></a>`_.support.enumErrorProps`
<a href="#_supportenumerrorprops">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1003 "View in source") [&#x24C9;][1]

(boolean): Detect if `name` or `message` properties of `Error.prototype` are
enumerable by default (IE < 9, Safari < 5.1).

* * *

<!-- /div -->

<!-- div -->

### <a id="_supportenumprototypes"></a>`_.support.enumPrototypes`
<a href="#_supportenumprototypes">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1017 "View in source") [&#x24C9;][1]

(boolean): Detect if `prototype` properties are enumerable by default.
<br>
<br>
Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
(if the prototype or a property on the prototype has been set)
incorrectly set the `[[Enumerable]]` value of a function's `prototype`
property to `true`.

* * *

<!-- /div -->

<!-- div -->

### <a id="_supportnonenumshadows"></a>`_.support.nonEnumShadows`
<a href="#_supportnonenumshadows">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1028 "View in source") [&#x24C9;][1]

(boolean): Detect if properties shadowing those on `Object.prototype` are non-enumerable.
<br>
<br>
In IE < 9 an object's own properties, shadowing non-enumerable ones,
are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).

* * *

<!-- /div -->

<!-- div -->

### <a id="_supportownlast"></a>`_.support.ownLast`
<a href="#_supportownlast">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1036 "View in source") [&#x24C9;][1]

(boolean): Detect if own properties are iterated after inherited properties (IE < 9).

* * *

<!-- /div -->

<!-- div -->

### <a id="_supportspliceobjects"></a>`_.support.spliceObjects`
<a href="#_supportspliceobjects">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1051 "View in source") [&#x24C9;][1]

(boolean): Detect if `Array#shift` and `Array#splice` augment array-like objects
correctly.
<br>
<br>
Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
`shift()` and `splice()` functions that fail to remove the last element,
`value[0]`, of array-like objects even though the "length" property is
set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
while `splice()` is buggy regardless of mode in IE < 9.

* * *

<!-- /div -->

<!-- div -->

### <a id="_supportunindexedchars"></a>`_.support.unindexedChars`
<a href="#_supportunindexedchars">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1062 "View in source") [&#x24C9;][1]

(boolean): Detect lack of support for accessing string characters by index.
<br>
<br>
IE < 8 can't access characters by index. IE 8 can only access characters
by index on string literals, not string objects.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettings"></a>`_.templateSettings`
<a href="#_templatesettings">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1074 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.templatesettings "See the npm package")

(Object): By default, the template delimiters used by lodash are like those in
embedded Ruby (ERB). Change the following template settings to use
alternative delimiters.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsescape"></a>`_.templateSettings.escape`
<a href="#_templatesettingsescape">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1082 "View in source") [&#x24C9;][1]

(RegExp): Used to detect `data` property values to be HTML-escaped.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsevaluate"></a>`_.templateSettings.evaluate`
<a href="#_templatesettingsevaluate">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1090 "View in source") [&#x24C9;][1]

(RegExp): Used to detect code to be evaluated.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsimports"></a>`_.templateSettings.imports`
<a href="#_templatesettingsimports">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1114 "View in source") [&#x24C9;][1]

(Object): Used to import variables into the compiled template.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsinterpolate"></a>`_.templateSettings.interpolate`
<a href="#_templatesettingsinterpolate">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1098 "View in source") [&#x24C9;][1]

(RegExp): Used to detect `data` property values to inject.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsvariable"></a>`_.templateSettings.variable`
<a href="#_templatesettingsvariable">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/3.10.1/lodash.src.js#L1106 "View in source") [&#x24C9;][1]

(string): Used to reference the data object in the template text.

* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #array "Jump back to the TOC."
