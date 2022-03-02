# Proyecto creado con react

Para mas [Create React App](https://github.com/facebook/create-react-app).

## Al clonar este repositorio

Para correr el proyecto se necesitaran las dependencias del package.json

ingresar el sig comando:
>npm install

importante tener node actualizado

Servidor y puerto por defecto.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Anexo

## Comandos que se implementaron en el desarrollo

https://mui.com/getting-started/installation/

>npm install @mui/material @emotion/react @emotion/styled

>npm install @mui/material @mui/styled-engine-sc styled-components

>npm install @mui/icons-material

https://react-icons.github.io/react-icons/

>npm install react-icons --save

>npm install recharts

>npm install react-router-dom@6

https://github.com/tengbao/vanta

>npm install vanta

https://github.com/mrdoob/three.js/ (para usar vantajs)

>npm install three@0.115.0

# detalles de Storybook

al crear una historia tener cuidado en los export, ejemplo
-Importante la separacion del simbolo = y el simbolo (
-el componente que va entre corchetes se usa return sino cambiar los corchetes por parentesis

export const WelcomeScreemExample = () =>{
    return <WelcomeScreen></WelcomeScreen>
}

o tambien:

export default {
    title: "WelcomeScreem",
    component: WelcomeScreen
}

export const WelcomeScreemExample = () =>(
    <WelcomeScreen></WelcomeScreen>
)