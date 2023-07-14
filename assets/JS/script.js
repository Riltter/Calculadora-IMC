const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault() //impedindo recarregamento da página

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2); // toFixed(2) para aparecerem apenas duas casas após a virgula

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden')

    if (imc < 18.5) {
        description = 'De acordo com o resultado, você está abaixo do peso!'

    } else if (imc < 24.9) {
        description = 'De acordo com o resultado, você está com um peso ideal. Parabéns!'
        value.classList.remove('attention')
        value.classList.add('normal')

    } else if (imc < 29.9) {
        description = 'De acordo com o resultado, você está levemente acima do peso'

    } else if (imc < 34.9) {
        description = 'De acordo com o resultado, você tem obsedidade grau I(moderada)'

    } else if (imc < 39.9) {
        description = 'De acordo com o resultado, você tem obesidade grau II(severa)'

    } else {
        description = 'De acordo com o resultado, você tem obesidade grau III(mórbida)'

    } 


    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description
});