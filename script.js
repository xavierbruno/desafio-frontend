//Seção 1 - Dados da Tabela de 50 funcionários
let dadosDaTabela = 
    [
    ['Marcio', 'Xavier', 'Desenvolvedor Front-End', 'TI', '15 dias'],
    ['Renato', 'Caruso','Assesoria', 'RH', '250 dias'],
    ['Luan', 'Sapuca', 'Desenvolvedor Front-End', 'TI', '275 dias'],
    ['Sibele', 'Rodrigues', 'Desenvolvedor Back-End', 'TI', '165 dias'],
    ['Cornelio', 'Oliveira', 'Assesoria', 'Vendas', ' 68 dias'],
    ['Pedro', 'Assis', 'Desenvolvedor Front-End', 'TI', '67 dias'],
    ['Luan', 'Silva', 'Assesoria', 'Vendas', '485 dias'],
    ['Ronaldo', 'da Silva', 'Desenvolvedor Back-End', 'TI', '45 dias'],
    ['Marcelo', 'Oliveira', 'Desenvolvedor Front-End', 'TI', '986 dias'],
    ['Osvaldo', 'Cruz', 'Assesoria', 'Operações', '986 dias'],
    ['Rebeca', 'Ferrão', 'Desenvolvedor Front-End', 'TI', '84 dias'],
    ['Paula', 'Ribeiro', 'Desenvolvedor Back-End', 'TI', '48 dias'],
    ['Tiago', 'Fonseca', 'Diretoria', 'Projetos', '4815 dias'],
    ['Thiago', 'Claus', 'Assesoria', 'RH', '845 dias'],
    ['Felipe', 'Almeida', 'Assessoria', 'Projetos', '9 dias'],
    ['Dionisio', 'Fonseca', 'Assesoria', 'Vendas', '844 dias'],
    ['Kaique', 'Silveira', 'Desenvolvedor Front-End', 'TI', '7413 dias'],
    ['Mariano', 'Real', 'Assessoria', 'Projetos', '482 dias'],
    ['Patrick', 'Cortes', 'Diretoria', 'Operações', '15 dias'],
    ['Sofia', 'da Mata', 'Desenvolvedor Back-End', 'TI', '865 dias'],
    ['Tania', 'Xavier', 'Assesoria', 'Operações', '485 dias'],
    ['Oscar', 'Pedroso', 'Desenvolvedor Front-End', 'TI', '65 dias'],
    ['Judith', 'Souza', 'Assesoria', 'Vendas', '61 dias'],
    ['Caio', 'Ribeiro', 'Assesoria', 'RH', '1 dia'],
    ['Rebeca', 'de Assis', 'Assesoria', 'Presidente', '9485 dias'],
    ['Amanda', 'Oliveira', 'Assessoria', 'Projetos', '8956 dias'],
    ['Julia', 'Ribeiro', 'Diretoria', 'Presidente', '10856 dias'],
    ['Janas', 'Figueiredo', 'Assessoria', 'Projetos', '956 dias'],
    ['Ademir', 'Travanca', 'Diretoria', 'RH', '5962 dias'],
    ['Marcelo', 'Pimentel', 'Assesoria', 'Presidente', '263 dias'],
    ['Eduardo', 'Meireles', 'Desenvolvedor Front-End', 'TI', '8596 dias'],
    ['Gustavo', 'Silva', 'Assesoria', 'RH', '9562 dias'],
    ['Fabio', 'Cavalcante', 'Assessoria', 'Projetos', '415 dias'],
    ['Caique', 'Montes', 'Assesoria', 'Operações', '5962 dias'],
    ['Morgana', 'Portinari', 'Assesoria', 'RH', '63 dias'],
    ['Laura', 'Azevedo', 'Assesoria', 'Presidente', '526 dias'],
    ['Patricia', 'Cunha', 'Desenvolvedor Back-End', 'TI', '745 dias'],
    ['Rafaela', 'Silva', 'Assesoria', 'Operações', ' 582 dias'],
    ['Isabela', 'Xavier', 'Assesoria', 'RH', '956 dias'],
    ['Hugo', 'Candido', 'Diretoria', 'TI', '452 dias'],
    ['Gustavo', 'Moreira', 'Desenvolvedor Back-End', 'TI', '596 dias'],
    ['Ryan', 'Souza', 'Assesoria', 'Presidente', '96 dias'],
    ['Marcele', 'Ferreira', 'Assesoria', 'Vendas', '5962 dias'],
    ['Juliana', 'Freitas', 'Assesoria', 'Operações', '452 dias'],
    ['Maria', 'Clara', 'Diretoria', 'Vendas','526 dias'],
    ['Caio', 'Marinho', 'Assesoria', 'Operações', '62 dias'],
    ['Jonas', 'Silva', 'Desenvolvedor Back-End', 'TI', '5 dias'],
    ['Pedro', 'Henrique', 'Assesoria', 'Vendas', '5962 dias'],
    ['Caio', 'Amancio', 'Assesoria', 'Presidente', '596 dias'],
    ['Marcelo', 'Silva', 'Desenvolvedor Back-End', 'TI', '69 dias'],
    ]

// Seção 1 - Manipulando os funcionalidades do datatable
$(document).ready(function() {
    $('#tabela-funcionarios').DataTable({
        data: dadosDaTabela,
        responsive: true,
        dom: 'rtp',
        language:{
            "sEmptyTable": "Nenhum registro encontrado",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        },
    });

} );



// Seção 2 - Função para adicionar funcionário
function adicionar_funcionario(event)
{
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let cargo = document.getElementById('cargo').value
    let setor = document.getElementById('setor').value
    let dataDeEntrada = document.getElementById('dataDeEntrada').value
    let valorDataISO = formataDataBrParaISO(dataDeEntrada)
    let valorTempoDeTrabalho = calculaDiferencaDataEmDias(valorDataISO)

    let listaDeEntradas = []
    let novoFuncionario = [nome, sobrenome, cargo, setor, valorTempoDeTrabalho + ' dia' + (valorTempoDeTrabalho > 1 ? 's' : '')]
    listaDeEntradas.push(novoFuncionario)
    swal("Adicionado!", `${nome} ${sobrenome} foi adicionado com sucesso!`, "success")
    let objetoDataTable = $('#tabela-funcionarios').DataTable()
    objetoDataTable.rows.add(listaDeEntradas).draw()

}

// Seção 2 - Consulta existência do funcionário e captura o index, com sweet alert para remoção
function consultar_funcionario(event)
{
    let nomeConsulta = document.getElementById('nomeConsulta').value
    let sobrenomeConsulta = document.getElementById('sobrenomeConsulta').value
    
    let table = $('#tabela-funcionarios').DataTable()

    let indice = false
    let nomeFuncionario, sobrenomeFuncionario
    table.rows( function (index, data) 
    {
        if(data[0] == nomeConsulta && data[1] == sobrenomeConsulta)
        {
            indice = index
            nomeFuncionario = data[0]
            sobrenomeFuncionario = data[1]
            return             
        } 
    })
    if(!indice){swal("Erro!", "Funcionário não encontrado!", "error")}
    else
    {
        swal({
            title: "Você tem certeza?",
            text: "Uma vez excluído, você não poderá recuperar este registro!",
            icon: "warning",
            buttons: ["Cancelar", "OK"] ,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete)
            {
                remover_funcionario(indice, table) 
                swal(`${nomeFuncionario} ${sobrenomeFuncionario} foi excluído do registro!`, {icon: "success"}) 
            } 
            else 
            {
                swal(`${nomeFuncionario} ${sobrenomeFuncionario} foi mantido no registro!`)
            }
        })  
    }
}

// Seção 2 - Função para excluir funcionário através do index
function remover_funcionario(index, table)
{
    if(index == 0){table.row(0).remove().draw()}
    else{table.row(index).remove().draw()}
}

// Seção 2 - Recebe o valor de entrada no formato DD/MM/AAAA e passa para o formato ISO MM/DD/AAAA
function formataDataBrParaISO(valorDataBr)
{
    let [ano, mes, dia] = valorDataBr.split('-')
    return [mes, dia, ano].join('/')
}

// Seção 2 - Calcula a diferença das datas de entrada no formato ISO com a data atual que tbm é ISO e transforma o valor em dias de trabalho
function calculaDiferencaDataEmDias(valorDataInicial)
{
	var objetoDataInicial = new Date(valorDataInicial)
    var objetoDataHoje = new Date()

	var difTempo = objetoDataHoje.getTime() - objetoDataInicial.getTime()
    var difDiasParaHoje = Math.ceil(difTempo / (1000 * 3600 * 24))-1

    return difDiasParaHoje
}

// Seção 3 - Animação de envio de arquivo
$("input#arquivo").change(function () {
    swal("Enviado!", "Seu arquivo foi enviado com sucesso!", "success")
});