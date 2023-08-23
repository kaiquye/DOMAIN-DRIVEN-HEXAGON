# :memo: Domain-Driven-Hexagon
 #

![Animação](https://github.com/kaiquye/domain-driven-hexagon/assets/69175890/9121fd6e-4864-4ae7-8de1-db898ec04683)


## Foi utilizado o EventEmitter para transmitir e receber comandos e eventos de domínio.

### Os comandos/eventos (events) de solicitação são enviados para o controller http ou de eventos.

O controlador analisa esses comandos/eventos usando objetos de transferência de dados (DTOs).
Ele mapeia esses DTOs para objetos de comando/consulta.

### Serviço de Aplicativo:

O controlador passa os objetos de comando/consulta para um serviço de aplicativo.
O serviço de aplicativo lida com a **lógica** principal.
Ele usa serviços de **domínio**, **entity** e **domain services** para processar a lógica de negócios.
O serviço de aplicativo interage com a camada de infraestrutura por meio de interfaces específicas **PORTS** (Geralmente interfaces ou classes abstratas).

### A camada de infraestrutura trabalha com a persistência e interações externas.
 ![image](https://github.com/kaiquye/domain-driven-hexagon/assets/69175890/de7f13dd-c9a1-41bb-8e01-8e0da24dfc0e)
