var listaFilmes = ["https://m.media-amazon.com/images/I/91R8UTUu7FL.jpg", "https://hbomax-images.warnermediacdn.com/images/GYUAwewus5pWewgEAAAAT/tileburnedin?size=1280x720&partner=hbomaxcom&v=363d9e7190fb41d769adc733ce8a5876&host=art-gallery.api.hbo.com&language=pt-br&w=1280", "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/11/17/2107498594-turningredver3xlg.jpg", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/44CBE0A984B3BB9D42A622ED03864BF198B17909DA23EE5DAC659F1981E194F4/scale?width=1200&aspectRatio=1.78&format=jpeg","https://m.media-amazon.com/images/I/81G5DqNT2SL.jpg", "https://play-lh.googleusercontent.com/64SMx5o6rrX5HIGVkKt8aJaunQ-owWPlvqRv-MBTs4ZMF5yk3-X-nPj7GmSmuPqiAkg23HgOI8O9mNPgLw=w240-h480-rw", "https://br.web.img3.acsta.net/medias/nmedia/18/92/75/28/20215618.jpg", "https://images.justwatch.com/poster/272920215/s718/amigos-coloridos.%7Bformat%7D", "https://upload.wikimedia.org/wikipedia/pt/4/47/Koe-no-Katachi-poster-film.jpg","http://encenasaudemental.com/wp-content/uploads/2017/11/2017-10-03_06-59-43_8196_What-Happened-to-Monday.jpg", "https://br.web.img2.acsta.net/pictures/17/06/27/11/57/382866.jpg"]

var listaNomesFilmes = ["Moana.", "As vantagens de ser invisível.", "Red, crescer é uma fera.","A nova onda do imperador.", "O rei leão.", "Coringa.","A hora do rush.", "Amizade colorida.", "A voz do silencio.", "Onde está segunda?", "Toc Toc."]

var descricaoFilmes = ['"Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos. Juntos, eles navegam pelo oceano em uma viagem incrível."', '"Um jovem tímido se esconde em seu próprio mundo até conhecer dois irmãos que o ajudam a viver novas experiências. Embora esteja feliz nessa nova fase, ele não esquece as tristezas do passado, que têm origem em uma chocante revelação."', '"Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada."', '"O jovem e arrogante Imperador Kuzco é transformado em uma lhama por sua poderosa mentora chamada Yzma. Perdido na floresta, a única chance de Kuzco recuperar seu trono é com a ajuda de Pacha, um humilde camponês. Juntos, eles precisam enfrentar a bruxa Yzma antes de concluir sua jornada."', '"Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Oscar."', '"Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante."', '"A filha de um diplomata chinês é sequestrada em Los Angeles e o cônsul chama o inspetor Lee em Hong Kong para ajudar o FBI com o caso. A agência americana não se importa com Lee e o deixa de lado no Departamento de Polícia de Los Angeles, pedindo ao detetive James Carter que o vigie. Apesar de Lee e Carter não se suportarem, eles resolvem trabalhar juntos para resolver o caso por conta própria ao descobrirem que foram abandonados tanto pelo FBI quanto pela polícia."', '"Jamie é uma recrutadora em Nova York que convence Dylan, um diretor de arte de Los Angeles, a aceitar um emprego em uma revista em Manhattan. Os dois descobrem que têm muito em comum e formam uma amizade. Traumatizados por vários romances com finais infelizes, Dylan e Jamie decidem parar de procurar o amor verdadeiro e cair na diversão. No entanto, as coisas se complicam quando os melhores amigos acrescentam sexo ao relacionamento."', '"Uma estudante com problemas de audição sofre com o bullying dos colegas e decide mudar de escola. Anos mais tarde, um dos rapazes que a importunavam resolve se redimir."', '"Para combater o problema da superpopulação, o número de filhos que um casal pode ter é rigidamente controlado pelo governo. Para seu desespero, um homem tem sete filhas gêmeas. Para criá-las da melhor forma possível, todas assumem a identidade da mesma mulher e cada uma pode sair de casa no dia que leva seu nome. As mulheres crescem em segredo até que uma das irmãs, Segunda, some misteriosamente."', '"Na sala de espera do médico, pacientes com TOC precisam lidar com as manias estranhas de cada um."']

for (var i = 0; i < listaFilmes.length; i++) {
    document.write ("<img src=" + listaFilmes [i] + ">" + "<h1>" + listaNomesFilmes [i]  + "</h1>" + descricaoFilmes[i] + "<br><br><br><br>")
}