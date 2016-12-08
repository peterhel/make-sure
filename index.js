class MakeSure {
    constructor(o, parent, errors) {
        this.o = o;
        this.parent = parent || '{}';
        this.errors = errors || [];

        if (!this.o) {
            this.errors.push(`${this.parent} is undefined`);
        }

    }

    has(prop, fn) {
        if (!this.o[prop]) {
            this.errors.push(`${this.parent || 'root'}.${prop} is undefined`);
        } else if (fn) {
            fn(new MakeSure(this.o[prop], [this.parent, prop].join('.'), this.errors));
        }

        return this;
    }

    throw() {
      if(this.errors.length > 0) {
        throw new Error(this.errors.join(', '));
      }
    }
}

module.exports = function makeSure(o) {
    return new MakeSure(o, undefined, undefined);
}
