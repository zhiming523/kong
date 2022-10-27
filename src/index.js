import './sass/main.scss'


jQuery(function ($) {
  $('.newsletter-signup').on('submit', function (e) {
    // submits data via ajax call
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    getUTMParameters(formData);
    submitViaAjax(formData);
  });
});

function getParameterByName(name, url) {
  name = name.replace(/[[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

async function getUTMParameters(formData) {
  let url = window.location.href;
  let utmParameters = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  await utmParameters.forEach(par => {
    formData.append(par, getParameterByName(par, url))
  })
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