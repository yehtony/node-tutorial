function test(params, params2) {
    let _params = params || 0.5
    let _params2 = params2 ?? 0.5
    console.log(_params, _params2)
}

test(undefined, undefined)

test()

test(null, null)

test(0, 0)

test(false, false)

test("", "")

test(true, true)
