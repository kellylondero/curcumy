const COOKIE_EXPIRY_DATE = 'Thu, 01 Jan 1970 00:00:00 UTC';
const COOKIE_PATH = '/';
const SAME_SITE_ATTRIBUTE = 'SameSite=None';
const SECURE_ATTRIBUTE = 'Secure';
const NEW_COOKIE_VALUE = 'new-cookie-value';

// Atualize os atributos dos cookies para permitir solicitações de sites cruzados e evitar erros de SameSite
const cookiesToUpdate = ['_gcl_aw', '_gcl_dc', '_gcl_au', 'sd_client_id', '_tt_enable_cookie', '_ttp', 'afUserId', '_uetvid', '_ga_126VYLCXDY'];

cookiesToUpdate.forEach((cookieName) => {
  if (document.cookie.includes(cookieName)) {
    document.cookie = cookieName + '=; expires=' + COOKIE_EXPIRY_DATE + '; path=' + COOKIE_PATH + ';';
    document.cookie = cookieName + '=' + NEW_COOKIE_VALUE + '; ' + SECURE_ATTRIBUTE + '; ' + SAME_SITE_ATTRIBUTE + ';';
  }
});