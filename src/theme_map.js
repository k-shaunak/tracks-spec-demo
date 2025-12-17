/**
 * THE ARCHIVIST - THEME MAP
 * Define the visual skins for the interface here.
 * Location: src/ (UI Configuration)
 * * UNIVERSAL THEME SYSTEM
 * - Sepia: Optimized for long-form reading (Archivist Native)
 * - Dark: Slate & Sky (Hub Native)
 * - Light: Slate & Monochrome (Hub Native)
 */

window.THEME_MAP = {
    'sepia': {
        label: 'Sepia',
        // Backgrounds: Cream & Lighter Cream
        bg: '#f2e8cf', bgCss: 'bg-[#f2e8cf]', 
        panel: 'bg-[#fffcf5]', 
        spinnerBg: 'bg-[#f9f4e6]',
        
        // Text: Dark Coffee & Dark Earth (Accessible Contrast > 4.5:1)
        text: 'text-[#382b22]', textColor: '#382b22',
        accent: 'text-[#695848]', // Darkened from #8c7b60 for readability
        link: 'text-[#382b22] decoration-[#695848]',
        
        // UI Elements
        border: 'border-[#d6cbb0]', 
        pointerColor: '#695848',
        
        // Actions: Deep Brown
        button: 'bg-[#2c241b] text-[#f2e8cf] hover:bg-[#4a3b2a] border border-[#382b22]', 
        buttonText: 'text-[#f2e8cf]',
        
        // Metaphysics
        font: 'font-serif', 
        grain: true
    },
    'dark': {
        label: 'Obsidian',
        // Backgrounds: Slate 900 & Slate 800
        bg: '#0f172a', bgCss: 'bg-slate-900', 
        panel: 'bg-slate-800', 
        spinnerBg: 'bg-slate-800',
        
        // Text: Slate 200 & Slate 400
        text: 'text-slate-200', textColor: '#e2e8f0',
        accent: 'text-slate-400', 
        link: 'text-sky-400 decoration-sky-600',
        
        // UI Elements
        border: 'border-slate-700', 
        pointerColor: '#38bdf8', // Sky 400
        
        // Actions: Sky Blue for High Visibility
        button: 'bg-sky-600 text-white hover:bg-sky-500 border border-sky-700 shadow-sm shadow-sky-900/20', 
        buttonText: 'text-white',
        
        // Metaphysics
        font: 'font-sans', 
        grain: false
    },
    'light': {
        label: 'Light',
        // Backgrounds: Slate 50 & White
        bg: '#f8fafc', bgCss: 'bg-slate-50', 
        panel: 'bg-white', 
        spinnerBg: 'bg-white',
        
        // Text: Slate 700 & Slate 500
        text: 'text-slate-700', textColor: '#334155',
        accent: 'text-slate-500', 
        link: 'text-slate-900 decoration-slate-300',
        
        // UI Elements
        border: 'border-slate-200', 
        pointerColor: '#0f172a', // Slate 900
        
        // Actions: Slate 900 (Stark/Professional)
        button: 'bg-slate-900 text-slate-50 hover:bg-slate-800 border border-slate-700 shadow-sm', 
        buttonText: 'text-slate-50',
        
        // Metaphysics
        font: 'font-sans', 
        grain: false
    }
};