export function sealed(param: string) {
  return function(target: Function): void {
    console.log(`Sealing the constructor, parameter: ${param}`);
    Object.seal(target);
    Object.seal(target.prototype);
  };
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function() {
    console.log('Creating new instance');
    console.log(target.name);
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;
  return <TFunction> newConstructor;
}

export function writable(isWritable: boolean) {
  return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = isWritable;
  };
}