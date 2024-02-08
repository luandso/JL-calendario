const button = document.getElementById('login')

async function validarLogin(){
    const nome = document.getElementById('nome')
    const senha = document.getElementById('senha')

    if(nome === '' || senha === ''){
        alert('Preencha os Campos Corretamente...')
    } else {

        const users = await fetch('http://localhost:8080/usuario')
        const listUsers = await users.json()

        const testeLogin = false;

        listUsers.forEach(user) => {
            if(nome === user.nome && senha === user.senha){
                alert('Usuário Logado com Sucesso !!!')
                testeLogin = true;
                window.location.href = './index.html'
            }
        } 

    }
    if(!testeLogin)
}
window.onlooad = () => {
    button.addEventListener('click', validarLogin)
}