// Klasa ColorChanger - programowanie obiektowe
class ColorChanger {
    constructor() {
        this.currentColor = '#34495e';
        this.changeCount = 0;
        this.defaultColor = '#34495e';
        
        // Inicjalizacja po załadowaniu DOM
        this.init();
    }
    
    init() {
        // Rejestracja event handlers (obsługi zdarzeń)
        this.registerEventHandlers();
        this.updateInfo('Aplikacja uruchomiona');
    }
    
    // Metoda rejestrująca wszystkie event handlers
    registerEventHandlers() {
        // Event handler dla przycisku "Zastosuj kolor"
        const applyBtn = document.getElementById('applyBtn');
        applyBtn.addEventListener('click', (event) => this.onApplyColor(event));
        
        // Event handler dla przycisku "Reset"
        const resetBtn = document.getElementById('resetBtn');
        resetBtn.addEventListener('click', (event) => this.onReset(event));
        
        // Event handler dla przycisku "Zastosuj własny"
        const applyCustomBtn = document.getElementById('applyCustomBtn');
        applyCustomBtn.addEventListener('click', (event) => this.onApplyCustomColor(event));
        
        // Event handler dla radio buttons - zmiana koloru przy kliknięciu
        const radioButtons = document.querySelectorAll('input[name="color"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (event) => this.onRadioChange(event));
        });
        
        // Event handler dla color picker - zmiana w czasie rzeczywistym
        const customColor = document.getElementById('customColor');
        customColor.addEventListener('input', (event) => this.onColorPickerInput(event));
        
        // Event handler dla ruchu myszą (opcjonalnie - pokazuje koncepcję event loop)
        document.addEventListener('mousemove', (event) => this.onMouseMove(event));
        
        // Event handler dla klawiszy (dodatkowa funkcjonalność)
        document.addEventListener('keydown', (event) => this.onKeyPress(event));
    }
    
    // Event handler - odpowiednik onPaint z prezentacji
    // Zmienia kolor tła (background) całego body
    onPaint(color) {
        document.body.style.backgroundColor = color;
        this.currentColor = color;
        this.changeCount++;
        this.updateInfo(`Zmieniono kolor na ${color}`);
    }
    
    // Event handler - obsługa kliknięcia przycisku "Zastosuj kolor"
    onApplyColor(event) {
        const selectedRadio = document.querySelector('input[name="color"]:checked');
        
        if (selectedRadio) {
            const color = selectedRadio.value;
            this.onPaint(color);
        } else {
            this.updateInfo('Nie wybrano koloru!');
            alert('Proszę wybrać kolor z listy');
        }
    }
    
    // Event handler - obsługa zmiany radio button
    onRadioChange(event) {
        const color = event.target.value;
        this.onPaint(color);
    }
    
    // Event handler - obsługa przycisku "Reset"
    onReset(event) {
        this.onPaint(this.defaultColor);
        
        // Odznacz wszystkie radio buttons
        const radioButtons = document.querySelectorAll('input[name="color"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        
        // Reset color picker
        document.getElementById('customColor').value = '#1abc9c';
        
        this.updateInfo('Zresetowano do domyślnego koloru');
    }
    
    // Event handler - obsługa własnego koloru
    onApplyCustomColor(event) {
        const customColor = document.getElementById('customColor').value;
        this.onPaint(customColor);
    }
    
    // Event handler - obsługa color picker w czasie rzeczywistym
    onColorPickerInput(event) {
        const color = event.target.value;
        // Podgląd w czasie rzeczywistym bez zwiększania licznika
        document.body.style.backgroundColor = color;
        this.updateCurrentColorDisplay(color);
    }
    
    // Event handler - obsługa ruchu myszą (demonstracja event loop)
    onMouseMove(event) {
        // Można dodać efekty wizualne związane z ruchem myszą
        // Dla demonstracji Event Loop - pokazuje, że wydarzenia są przetwarzane asynchronicznie
    }
    
    // Event handler - obsługa klawiszy
    onKeyPress(event) {
        // Skróty klawiszowe
        if (event.key === 'r' || event.key === 'R') {
            this.onReset(event);
        }
    }
    
    // Metoda pomocnicza do aktualizacji informacji
    updateInfo(action) {
        document.getElementById('currentColor').textContent = this.currentColor;
        document.getElementById('changeCount').textContent = this.changeCount;
        document.getElementById('lastAction').textContent = action;
    }
    
    // Metoda pomocnicza do aktualizacji wyświetlania koloru
    updateCurrentColorDisplay(color) {
        document.getElementById('currentColor').textContent = color;
    }
}

// Event Loop - kod uruchamiany po załadowaniu DOM
// To jest przykład asynchronicznego przetwarzania zdarzeń
document.addEventListener('DOMContentLoaded', () => {
    // Inicjalizacja aplikacji - tworzy instancję klasy ColorChanger
    const app = new ColorChanger();
    
    console.log('Event-driven application initialized');
    console.log('Event Loop is running...');
    console.log('Waiting for user events (clicks, mouse moves, key presses)...');
});

// Demonstracja Event Loop - komunikaty asynchroniczne
console.log('Script loaded - Event Loop started');
