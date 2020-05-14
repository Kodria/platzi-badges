# Platzi Badges

Herramientas utilizadas:

- ReactJS
- Webpack
- Babel
- Docker

## Instalación y configuración

Para el funcionamiento del proyecto se utiliza Docker. A continuación la forma de inicializar


### Modo desarrollo

```

# Iniciarlizar el contenedor por primera vez
docker-compose up -d --build

# Cuando ya se ha construido la imagen es posible ejecutar
docker-compose up -d

# Acceder al aplicativo
http://localhost:8080

# Finalizar el contenedor
docker-compose down

```

### Modo producción

```

# Iniciarlizar el contenedor por primera vez
docker-compose -f docker-production.yml up -d --build

# Cuando ya se ha construido la imagen es posible ejecutar
docker-compose -f docker-production.yml up -d

# Acceder al aplicativo
http://localhost:3001

# Finalizar el contenedor
docker-compose down

```