## Domain-Driven-Hexagon
#### Abordagem arquitetural dos princípios do Domain-Driven Design (DDD) com o padrão arquitetural do Hexagonal Architecture (Ports and Adapters).
##
## Foi utilizado o EventEmitter para transmitir e receber comandos e eventos de domínio.
Foi utilizado o **node-EventEmitter** para enviar e receber comandos e eventos no sistema. Cada vez que alguém faz uma solicitação de retirada de saldo (PIX), um evento é disparado para registrar a transação. Além disso, sempre que um novo usuário é criado, também  é disparado um evento."
##
 ![Animação](https://github.com/kaiquye/DOMAIN-DRIVEN-HEXAGON/assets/69175890/e69fc13b-9c3b-4a4a-b160-9ab1208961b1)
# 
##

### Os comandos/eventos (events) de solicitação são enviados para o controller http ou de eventos.

O controlador analisa esses comandos/eventos usando objetos de transferência de dados (DTOs).
Ele mapeia esses DTOs para objetos de comando/consulta.

### Serviço de Aplicativo:

O controlador passa os objetos de comando/consulta para um serviço de aplicativo.
O serviço de aplicativo lida com a **lógica** principal.
Ele usa serviços de **domínio**, **entity** e **domain services** para processar a lógica de negócios.
O serviço de aplicativo interage com a camada de infraestrutura por meio de interfaces específicas **PORTS** (Geralmente interfaces ou classes abstratas).

### A camada de infraestrutura trabalha com a persistência e interações externas.
![image](https://github.com/kaiquye/DOMAIN-DRIVEN-HEXAGON/assets/69175890/c1bf9365-0fc5-4159-9af9-f9f742cbcc3f)

