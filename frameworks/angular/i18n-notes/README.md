# Angular i18n
https://angular.io/guide/i18n

## Translates
- Displaying dates, number, percentages, and currencies in a local format.
- Translating text in component templates.
- Handling plural forms of words.
- Handling alternative text.

## Standards
Angular follows the Unicode LDML convention that uses stable identifiers (Unicode locale identifiers) based on the norm BCP47. It is very important that you follow this convention when you define your locale, because the Angular i18n tools use this locale id to find the correct corresponding locale data.
- http://www.rfc-editor.org/rfc/bcp/bcp47.txt
- Angular defaults to en-US

## Setup up locale
```bash
ng serve --aot --locale fr
```

## The i18n template translation process has four phases:
1. Mark static text messages in your component templates for translation.
2. An Angular i18n tool extracts the marked text into an industry standard translation source file.
3. A translator edits that file, translating the extracted text into the target language, and returns the file to you.
4. The Angular compiler imports the completed translation files, replaces the original messages with translated text, and generates a new version of the app in the target language.

You need to build and deploy a separate version of the app for each supported language.

## Templates
```html
<h1 i18n="meaning|description">Hello i18n!</h1>
```

Example:
```html
<h1 i18n="site header|An introduction header for this sample">Hello i18n!</h1>
```
All occurrences of a text message that have the same meaning will have the same translation. A text message that is associated with different meanings can have different translations.

Add an ID
```html
<h1 i18n="@@introductionHeader">Hello i18n!</h1>
```

Combine description and ID or meaning, description and ID
i18n-x="<meaning>|<description>@@<id>" syntax.
```html
<h1 i18n="site header|An introduction header for this sample@@introductionHeader">Hello i18n!</h1>
```

## Create a translation source file with ng xi18n
- Use the ng xi18n command provided by the CLI to extract the text messages marked with i18n into a translation source file.
- Open a terminal window at the root of the app project and enter the ng xi18n command:
```bash
ng xi18n
```

By default, the tool generates a translation file named messages.xlf in the XML Localization Interchange File Format (XLIFF, version 1.2).

If you don't use the CLI, you can use the ng-xi18n tool directly from the @angular/compiler-cli package, or you can manually use the CLI Webpack plugin ExtractI18nPlugin from the @ngtools/webpack package.

## Other translation formats
Angular i18n tooling supports three translation formats:
- XLIFF 1.2 (default)
- XLIFF 2
- XML Message Bundle (XMB)

You can specify the translation format explicitly with the --i18nFormat flag as illustrated in these example commands:
```bash
ng xi18n  --i18nFormat=xlf
ng xi18n  --i18nFormat=xlf2
ng xi18n  --i18nFormat=xmb
```

The sample in this guide uses the default XLIFF 1.2 format.

XLIFF files have the extension .xlf. The XMB format generates .xmb source files but uses .xtb (XML Translation Bundle: XTB) translation files.

Other options

You can specify the output path used by the CLI to extract your translation source file with the parameter --outputPath:
```bash
ng xi18n --outputPath src/locale
```

You can change the name of the translation source file that is generated by the extraction tool with the parameter --outFile:
```bash
ng xi18n --outFile source.xlf
```

You can specify the base locale of your app with the parameter --locale:
```bash
ng xi18n --locale fr
```

The extraction tool uses the locale to add the app locale information into your translation source file. This information is not used by Angular, but external translation tools may need it.

## Determine browser lang
https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
var language = window.navigator.userLanguage || window.navigator.language;
alert(language); //works IE/SAFARI/CHROME/FF

## Dynamic switch
https://stackoverflow.com/questions/39894394/angular2-i18n-language-switch

https://plnkr.co/edit/JyE4l4TjEruuPsrbanmK?p=preview