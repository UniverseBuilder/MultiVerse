export default dynamicImport = (theme="dark") => 
import(`@multiverses/verse-css/scss/themes${theme}.scss`);