/**
 *
 *
 * @class O
 * @author: @michaeljota
 */
export class O {
  /**
   *
   * Freeze recursively objects and functions with `Object.freeze()`.
   *
   * Based on the original work of `@substack`,
   * [deep-freeze](https://github.com/substack/deep-freeze).
   *
   * @static
   * @template T
   * @param {T} o
   * @returns {T}
   *
   * @memberOf O
   */
  public static deepFreeze<T>(o: T): T {
    Object.freeze<T>(o);

    const oIsFunction = typeof(o) === 'function';

    Object.getOwnPropertyNames(o).forEach((prop) => {
      const propIsFreezable = oIsFunction
        ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments'
        : true;
      const propIsNull = prop === null;
      const propIsObjectOrFunction = typeof o[prop] === 'object' || typeof o[prop] === 'function';
      const propIsFrozen = Object.isFrozen(o[prop]);

      if (propIsFreezable && !propIsNull && propIsObjectOrFunction && !propIsFrozen) {
        O.deepFreeze(o[prop]);
      }
    });

    return o;
  }

  /**
   *
   * Seal recursively objects and functions with `Object.seal()`.
   *
   * @static
   * @template T The type of the param.
   * @param {T} o The object which should be sealed.
   * @returns {T} The object being sealed.
   *
   * @memberOf O
   */
  public static deepSeal<T>(o: T): T {
    Object.seal<T>(o);

    const oIsFunction = typeof o === 'function';

    Object.getOwnPropertyNames(o).forEach((prop) => {
      const propIsSealable = oIsFunction
        ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments'
        : true;
      const propIsNull = prop === null;
      const propIsObjectOrFunction = typeof o[prop] === 'object' || typeof o[prop] === 'function';
      const propIsSealed = Object.isSealed(o[prop]);

      if (propIsSealable && !propIsNull && propIsObjectOrFunction && !propIsSealed) {
        O.deepSeal(o[prop]);
      }
    });

    return o;
  }

  /**
   *
   * Prevent extensions recursively objects and functions with `Object.preventExtensions()`
   *
   * @static
   * @template T The type of the param.
   * @param {T} o The object which should be made non-extensible.
   * @returns {T} The object being made non-extensible.
   *
   * @memberOf O
   */
  public static deepPreventExtensions<T>(o: T): T {
    Object.preventExtensions<T>(o);

    const oIsFunction = typeof o === 'function';

    Object.getOwnPropertyNames(o).forEach((prop) => {
      const propIsModeable = oIsFunction
        ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments'
        : true;
      const propIsNull = prop === null;
      const propIsObjectOrFunction = typeof o[prop] === 'object' || typeof o[prop] === 'function';
      const isExtensible = Object.isExtensible(o[prop]);

      if (propIsModeable && !propIsNull && propIsObjectOrFunction && isExtensible) {
        O.deepPreventExtensions(o[prop]);
      }
    });

    return o;
  }

  /**
   * Assign objects and functions with `Object.assign()`.
   *
   * @static
   * @template T
   * @param {T} o The item to be merged
   * @param {...any[]} sources The new values to the item
   * @returns {T} A new object with the same properties that target had, but with sources values.
   *
   * @memberOf Obj
   */
  public static assign<T>(o: T, ...sources: any[]): T {
    sources = sources.filter(source => source !== {} || source === null || source === undefined);

    let newO = sources
      .map(source => {
        let obj: T = (<T> {});
        Object.keys(o).forEach((key) => {
          if (source.hasOwnProperty(key)) {
            obj[key] = source[key];
          }
        });
        return obj;
      })
      .reduce((previous, current) => {
        return Object.assign<T, T> (previous, current);
      });

    return [o, newO]
      .reduce(
        (previous, current) => {
          return Object.assign(previous, current);
        },
        (<T> {}),
      );
  }
};
