import App from './app'

function main(){
    App.listen(3000, 'localhost', () => {
        console.log('Server running at port 3000')
    })
}

main()
