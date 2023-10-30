import NavBarNavigation from './NavBarNavigation';


function Home() {
    return (
        
        <>
            {console.log(localStorage.getItem('token'))}
            <NavBarNavigation />
            <img src="./public/book.png" width={100} height={100} />
            <p>Bienvenido a nuestra Biblioteca Virtual, tu plataforma personalizada para gestionar tu colección de libros de manera eficiente y organizada. Ya sea que seas un ávido lector, un apasionado coleccionista o simplemente alguien que desea mantener un registro de los libros que has leído o planeas leer, nuestra página de gestión de libros es tu compañero perfecto.</p>
        </>

    );
}

export default Home;