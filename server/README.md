![DomainDrivenHexagon.png](..%2F..%2F..%2FOneDrive%2F%C1rea%20de%20Trabalho%2FDomainDrivenHexagon.png)

Resumindo, o fluxo de dados se parece com isso (da esquerda para a direita):

- O comando/evento de solicitação/CLI é enviado ao controlador usando DTO simples;
- O controlador analisa esse DTO, mapeia-o para um formato de objeto de comando/consulta e o passa para um serviço de aplicativo;
- O serviço de aplicativo lida com esse comando/consulta; executa a lógica de negócios usando serviços de domínio e entidades/agregados e usa a camada de infraestrutura por meio de portas (interfaces);
- A camada de infraestrutura mapeia os dados para um formato necessário, recupera/persiste dados de/para um banco de dados, usa adaptadores para outras comunicações de E/S (como enviar um evento para um agente externo ou chamar APIs externas), mapeia os dados de volta para o formato de domínio e o retorna de volta ao serviço de aplicativo;
- Depois que o serviço de aplicativo termina seu trabalho, ele retorna os dados/confirmação aos controladores;
- Os controladores retornam os dados para o usuário (se o aplicativo tiver apresentadores/visualizações, eles serão retornados).
