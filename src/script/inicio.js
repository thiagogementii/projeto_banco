
        document.addEventListener("DOMContentLoaded", function() {
            const saldoCard = document.querySelector('.saldo-card');
            const saldoText = saldoCard.querySelector('p .saldo-valor');
            const eyeIcon = saldoCard.querySelector('.eye-icon');
            const originalText = saldoText.textContent;
            const hiddenText = '••••••••••••';

            saldoCard.addEventListener('click', function(event) {
                event.preventDefault();
                if (saldoText.textContent === hiddenText) {
                    saldoText.textContent = originalText;
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                } else {
                    saldoText.textContent = hiddenText;
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                }
            });
        });
