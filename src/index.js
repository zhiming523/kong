import './sass/main.scss'


jQuery(function ($) {
  $('.newsletter-signup').on('submit', async function (e) {
    // submits data via ajax call
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let url = window.location.href;
    let data = await newsletterSubmit.getUTMParameters(formData, url);
    submitViaAjax(data);
  });
});

const newsletterSubmit = {
  getParameterByName: (name, url) => {
    name = name.replace(/[[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  },
  getUTMParameters: async (formData, url) => {
    let utmParameters = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    await utmParameters.forEach(par => {
      formData.append(par, newsletterSubmit.getParameterByName(par, url))
    });
    return formData;
  }
}

// this is a mock ajax call
function submitViaAjax(formData) {
  // DO NOT EDIT BELOW THIS LINE
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  console.log(json);
}

export default newsletterSubmit