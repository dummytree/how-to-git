it('should pass', ()=>{
	expect({state: true}).toMatchObject({state: true});
	expect(false).tobe(false);
});

it('should console log and really do absolutely nothing', ()=>{
	console.log('this is a useless test');
});
