import newsletterSubmit from './index'

test('Get parameter by name', () => {
    let url = 'http://localhost:8080/?utm_source=asdf';
    expect(newsletterSubmit.getParameterByName('utm_source', url)).toBe('asdf')
})

test('Get UTM parameters', () => {
    let url = 'http://localhost:8080/?utm_source=asdf';
    let formData = new FormData();
    expect(newsletterSubmit.getUTMParameters(formData, url)).toMatchObject(new FormData())
})