let sidebar = [{
    text  : 'Components',
    items : [
        { text : 'Error', link : '/docs/error' },
    ],
}];

let head = [

    // Meta
    ['meta', { property : 'og:title',            content : 'PaintUI' }],
    ['meta', { property : 'og:description',      content : 'An open-source library of Laravel Blade and Laravel Livewire UI components.' }],
    ['meta', { property : 'og:url',              content : 'https://paintui.torchkit.co' }],
    ['meta', { property : 'og:image',            content : 'https://paintui.torchkit.co/card.png' }],
    ['meta', { property : 'og:secure_url',       content : 'https://paintui.torchkit.co/card.png' }],
    ['meta', { name     : 'twitter:card',        content : 'summary_large_image' }],
    ['meta', { name     : 'twitter:title',       content : 'PaintUI' }],
    ['meta', { name     : 'twitter:description', content : 'An open-source library of Laravel Blade and Laravel Livewire UI components.' }],
    ['meta', { name     : 'twitter:image',       content : 'https://paintui.torchkit.co/card.png' }],

    // Icons
    ['link', { rel : 'icon', href : '/favicon.png', type : 'image/png' }],

];

let theme = {
    logo        : '/logo.png',
    nav         : [{ text : 'TorchKit', link : 'https://torchkit.co' }],
    sidebar     : sidebar,
    search      : { provider : 'local' },
    editLink    : { pattern : 'https://github.com/TorchKit/PaintUI/edit/main/:path' },
    socialLinks : [
        { icon : 'github',  link : 'https://github.com/TorchKit/PaintUI' },
        { icon : 'twitter', link : 'https://twitter.com/MattKingshott' },
    ],
};

export default {
    head            : head,
    title           : 'PaintUI',
    titleTemplate   : ':title - PaintUI | TorchKit',
    description     : 'An open-source library of Laravel Blade and Laravel Livewire UI components.',
    lastUpdated     : true,
    appearance      : true,
    themeConfig     : theme,
    ignoreDeadLinks : true,
    vite            : { server : { host : 'paintui.test' } },
}