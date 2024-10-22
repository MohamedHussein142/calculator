// الحصول على العناصر من الـ DOM
const display = document.getElementById('call');
const buttons = document.querySelectorAll('.button');

// المتغيرات لتخزين القيم
let currentInput = '';
let operator = '';
let firstOperand = '';

// إضافة حدث click لكل زر
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            // إعادة تعيين الآلة الحاسبة
            currentInput = '';
            firstOperand = '';
            operator = '';
            display.value = '0';
        } else if (value === '=') {
            // حساب النتيجة
            if (currentInput && firstOperand) {
                const result = calculate(firstOperand, currentInput, operator);
                display.value = result;
                currentInput = result;
                firstOperand = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // تخزين القيم
            if (currentInput) {
                if (!firstOperand) {
                    firstOperand = currentInput;
                } else {
                    firstOperand = calculate(firstOperand, currentInput, operator);
                }
                operator = value;
                currentInput = '';
            }
        } else {
            // إضافة الأرقام إلى المدخلات
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// دالة لحساب النتيجة
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return parseFloat(a) + parseFloat(b);
        case '-':
            return parseFloat(a) - parseFloat(b);
        case '*':
            return parseFloat(a) * parseFloat(b);
        case '/':
            return parseFloat(a) / parseFloat(b);
        default:
            return b;
    }
}
