import { compose } from 'ramda'

// https://mostly-adequate.gitbook.io/mostly-adequate-guide/appendix_b#io
export class IO {
	public unsafePerformIO: any

	constructor(fn: any) {
		this.unsafePerformIO = fn
	}

	// [util.inspect.custom]() {
	// 	return 'IO(?)';
	// }

	// ----- Pointed IO
	static of(x: any) {
		return new IO(() => x)
	}

	// ----- Functor IO
	map(fn: any) {
		return new IO(compose(fn, this.unsafePerformIO))
	}

	// ----- Applicative IO
	ap(f: any) {
		return this.chain((fn: any) => f.map(fn))
	}

	// ----- Monad IO
	chain(fn: any) {
		return this.map(fn).join()
	}

	join() {
		return new IO(() => this.unsafePerformIO().unsafePerformIO())
	}
}
