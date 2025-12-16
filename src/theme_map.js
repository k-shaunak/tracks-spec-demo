/**
 * THE ARCHIVIST - THEME MAP
 * Define the visual skins for the interface here.
 * Location: src/ (UI Configuration)
 */

window.THEME_MAP = {
    'sepia': {
        label: 'Sepia',
        bg: '#f2e8cf', bgCss: 'bg-[#f2e8cf]', text: 'text-[#382b22]', textColor: '#382b22',
        panel: 'bg-[#fffcf5]', border: 'border-[#d6cbb0]', accent: 'text-[#8c7b60]',
        button: 'bg-[#2c241b] text-[#f2e8cf] hover:bg-[#4a3b2a] border border-[#382b22]', buttonText: 'text-[#f2e8cf]',
        font: 'font-serif', pointerColor: '#8c7b60', spinnerBg: 'bg-[#f9f4e6]',
        link: 'text-[#5c4d3c] decoration-[#8c7b60]',
        grain: true
    },
    'dark': {
        label: 'Obsidian',
        bg: '#09090b', bgCss: 'bg-zinc-950', text: 'text-zinc-200', textColor: '#e4e4e7',
        panel: 'bg-zinc-900', border: 'border-zinc-800', accent: 'text-zinc-400',
        button: 'bg-indigo-600 text-white hover:bg-indigo-500', buttonText: 'text-white',
        font: 'font-sans', pointerColor: '#e4e4e7', spinnerBg: 'bg-zinc-900',
        link: 'text-indigo-400 decoration-indigo-600',
        grain: false
    },
    'light': {
        label: 'Light',
        bg: '#ffffff', bgCss: 'bg-white', text: 'text-slate-900', textColor: '#0f172a',
        panel: 'bg-slate-50', border: 'border-slate-200', accent: 'text-slate-400',
        button: 'bg-blue-600 text-white hover:bg-blue-700', buttonText: 'text-white',
        font: 'font-sans', pointerColor: '#0f172a', spinnerBg: 'bg-slate-100',
        link: 'text-blue-600 decoration-blue-300',
        grain: false
    }
};
