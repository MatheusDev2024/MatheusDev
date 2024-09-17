

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const btnAbrir = document.getElementById('btn-menu');
    const btnFechar = document.getElementById('btn-fechar');
    const menuMobile = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay');

    btnAbrir.addEventListener('click', function() {
        menuMobile.classList.add('open');
        overlay.classList.add('active');
    });

    menuMobile.addEventListener('click', function() {
        menuMobile.classList.remove('open');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
        menuMobile.classList.remove('open');
        overlay.classList.remove('active');
    });
});


const chk = document.getElementById('chk'); // Referência ao checkbox
const logoImage = document.getElementById('logoImage'); // Referência à imagem da logo

chk.addEventListener('change', () => {
    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {
        logoImage.src = 'images/logo2.png'; // Caminho para a logo da versão light
    } else {
        logoImage.src = 'images/logo.png'; // Caminho para a logo da versão dark
    }
});


const texts = {
    pt: {
      inicio: 'Início',
      habilidades: 'Habilidades',
      sobre: 'Sobre mim',
      projetos: 'Projetos',
      contato: 'Contato',
      txtprincipal: 'DESENVOLVENDO O FUTURO, LINHA POR LINHA<span>.</span></h1>',
      txtsec: '"Desenvolvendo o futuro, linha por linha" é mais do que uma simples frase; é a essência do meu trabalho como programador júnior. Cada linha de <span>código</span> que escrevo é um passo em direção a soluções inovadoras e eficientes. Embora ainda esteja no início da minha carreira, estou <span>comprometido</span> em aprender e evoluir constantemente, aplicando boas práticas e tecnologias modernas para criar aplicações que não apenas funcionam, mas também impulsionam o <span>futuro</span>. Estou aqui para <span>transformar</span> ideias em realidade, uma linha de código por vez.',
      btncont:'Entre em Contato',
      habi: 'MINHAS <span>HABILIDADES.</span>',
      land: 'Criando landing pages eficientes e atraentes que convertem visitantes em clientes. Como programador, foco em designs responsivos e experiência de usuário otimizada para garantir resultados.',
      java: 'Desenvolvo soluções robustas e escaláveis utilizando Java. Com foco na eficiência e na performance, aplico boas práticas para criar aplicações seguras e de alta qualidade.',
      js: 'Crio interfaces dinâmicas e interativas utilizando JavaScript. Com atenção à performance e à experiência do usuário, ofereço soluções rápidas e responsivas para a web.',
      linux: 'Trabalho com Linux para oferecer soluções robustas e eficientes. Utilizo minhas habilidades para otimizar sistemas, garantir segurança e automação, e melhorar o desempenho de servidores.',
      sql: 'Utilizo MySQL para otimizar bancos de dados, garantindo eficiência e integridade dos dados. Com foco em consultas rápidas e manutenção eficaz, asseguro soluções confiáveis para armazenamento e recuperação de informações.',
      mongo: '>Utilizo MongoDB para gerenciar dados não relacionais com flexibilidade e escalabilidade. Comfoco em performance e eficiência, crio soluções que suportam grandes volumes de dados e requisitos dinâmicos.',
      prazer:'MUITO PRAZER, <span>SOU MATHEUS SILVA.</span>',
      prazerDsc: 'Sou <span>apaixonado</span> por tecnologia e inovação. Comecei minha jornada como designer gráfico e técnico em computador, experiências que moldaram minha <span>visão</span> criativa e técnica. Atualmente, estou mergulhado na faculdade de Ciências da Computação e trabalhando como <span>Programador</span> Júnior Java, onde amplio meu conhecimento e desenvolvo minhas <span>habilidades</span> em programação. No momento, estou me dedicando a aprender e aprimorar minhas habilidades em Java, JavaScript, CSS, HTML, MySQL, MongoDB e Linux. Moro no <span>Brasil</span> e estou sempre em busca de novas oportunidades para crescer e contribuir para o mundo da <span>tecnologia</span>. Cada linha de código que escrevo é um reflexo do meu <span>compromisso</span> com a excelência e a inovação. Estou entusiasmado com as possibilidades futuras e pronto para enfrentar novos desafios e transformar ideias em soluções reais.',
      project: 'MEUS <span>PROJETOS</span>',
      falecmg: 'FALE <span>COMIGO.</span>',
      name:'Seu Nome:',
      email:'Seu Melhor E-mail',
      number:'Seu número',
      mesage:'Sua Mensagem',
      softskills:'MINHAS <span>SOFT SKILLS</span>',
      titulocomunicacao:'Comunicação',
      comunicacao:'Habilidade de se expressar claramente e ouvir ativamente, facilitando a compreensão e colaboração com outros.',
      titulotrabalhoEquipe:'Trabalho em Equipe',
      trabalhoemequipe:'Capacidade de colaborar eficazmente com outras pessoas para atingir objetivos comuns e contribuir para o sucesso do grupo.',
      tituloresolucaoProblemas: 'Resolução de Problemas',
      resolucaoProblemas: 'Habilidade de identificar, analisar e resolver problemas de maneira eficaz e criativa.',
      tituloadaptacao: 'Adaptação',
      adaptacao: 'Capacidade de se ajustar rapidamente a novas situações e mudanças, mantendo a eficiência e o desempenho.',
      titulointeligenciaEmocional:'Inteligência Emocional',
      inteligenciaEmocional:'Habilidade de reconhecer, entender e gerenciar suas próprias emoções e as dos outros, melhorando relacionamentos e decisões.',
      react:'Desenvolvo interfaces de usuário interativas e modernas utilizando React. Com ênfase na criação de componentes reutilizáveis e na gestão eficiente de estado, busco proporcionar uma experiência de usuário fluida e responsiva.',
      NET:'Desenvolvo aplicações robustas e escaláveis utilizando .NET, focando na performance e na qualidade do código para criar soluções eficientes.',
      python:'Emprego Python para criar aplicações e scripts eficientes. Com uma abordagem voltada para a automação, análise de dados e desenvolvimento web, busco oferecer soluções práticas e escaláveis para diversos problemas.',
      calculadora:'calculadora',
      tempo:'Previsão do Tempo',
      comida:'Aplicativo Delivery',
      pizza: 'Prever Valor de Pizza',
      tarefa: 'Lista de Tarefas',
      txtsecpro:'Pogramador Full-Stack Junior',
      cpp:'Desenvolvo soluções de alto desempenho utilizando C++. Com foco em eficiência e otimização, aplico boas práticas para criar aplicações robustas e de baixo nível que atendem a requisitos exigentes de performance.',
      sobrepra: 'Muito Prazer, <span>sou Matheus Gabriel</span>',
      sobrep1: 'Tenho 20 anos, sou programador júnior e estudante de <span>Ciência da Computação.</span> Sou apaixonado por tecnologia e sempre busco aprender algo novo. Adoro resolver <span>problemas</span> e encarar desafios no mundo da programação, sempre com vontade de <span>melhorar</span> e evoluir.',
      sobrep2: 'Com 1 ano de <span>experiência</span> em Java, banco de dados e Linux, já participei de projetos que me desafiaram a <span>desenvolver</span> soluções eficientes e criativas. Estou sempre em busca de novas oportunidades para <span>expandir</span> meus conhecimentos e contribuir de forma positiva em cada <span>equipe</span> da qual faço parte. Minha meta é crescer na área de tecnologia, me <span>aperfeiçoando</span> continuamente e entregando sempre o meu melhor.'
    },
    en: {
      inicio: 'Home',
      habilidades: 'Skills',
      sobre: 'About me',
      projetos: 'Projects',
      contato: 'Contact',
      txtprincipal:'BUILDING THE FUTURE, ONE LINE OF CODE AT A TIME<span>.</span></h1>',
      txtsec:  '"Developing the future, one line of code at a time" is more than just a phrase; it´s the essence of my work as a junior programmer. Every line of <span>code</span> I write is a step towards innovative and efficient solutions. Although I´m still at the beginning of my career, I am <span>committed</span> to learning and constantly evolving, applying best practices and modern technologies to create applications that not only work, but also drive the <span>future</span>. I´m here to <span>transform</span> ideas into reality, one line of code at a time.',
      btncont:'Contact us',
      habi: 'MY <span>SKILLS.</span>',
      land: 'Creating effective and attractive landing pages that convert visitors into clients. As a developer, I focus on responsive designs and optimized user experience to ensure results.',
      java: 'I develop robust and scalable solutions using Java. With a focus on efficiency and performance, I apply best practices to create secure and high-quality applications.',
      js: 'I create dynamic and interactive interfaces using JavaScript. With attention to performance and user experience, I provide fast and responsive solutions for the web.',
      linux: 'I work with Linux to provide robust and efficient solutions. I use my skills to optimize systems, ensure security and automation, and improve server performance.',
      sql: 'I use MySQL to optimize databases, ensuring efficiency and data integrity. With a focus on fast queries and effective maintenance, I provide reliable solutions for data storage and retrieval.',
      mongo: 'I use MongoDB to manage non-relational data with flexibility and scalability. Focusing on performance and efficiency, I create solutions that support large volumes of data and dynamic requirements.',
      prazer:'Nice to meet you, <span>I’m Matheus Silva.</span>',
      prazerDsc: 'I am <span>passionate</span> about technology and innovation. I began my journey as a graphic designer and computer technician, experiences that shaped my <span>creative</span> and technical <span>vision</span>. Currently, I’m immersed in a Computer Science degree and working as a Junior Java <span>Developer</span>, where I expand my knowledge and develop my <span>skills</span> in programming. At the moment, I am dedicated to learning and improving my skills in Java, JavaScript, CSS, HTML, MySQL, MongoDB, and Linux. I live in <span>Brazil</span> and am always seeking new opportunities to grow and contribute to the world of <span>technology</span>. Every line of code I write is a reflection of my <span>commitment</span> to excellence and innovation. I’m excited about future possibilities and ready to face new challenges and turn ideas into real solutions.',
      project: 'MY <span>PROJECTS</span>',
      falecmg: '<span>Talk</span> to <span>Me</span>.',
      name:'Your Name',
      email:'Your Best Email',
      number:'Your Number',
      mesage:'Your Message',
      softskills:'MY <span>SOFT SKILLS</span>',
      titulocomunicacao:'Comunication',
      comunicacao:'Ability to express yourself clearly and listen actively, facilitating understanding and collaboration with others.',
      titulotrabalhoEquipe:'Teamwork',
      trabalhoEquipe:'Ability to collaborate effectively with others to achieve common goals and contribute to the success of the group.',
      tituloresolucaoProblemas: 'Troubleshooting',
      resolucaoProblemas: 'Ability to identify, analyze and solve problems effectively and creatively.',
      tituloadaptacao: 'Adaptation',
      adaptacao: 'Ability to quickly adjust to new situations and changes while maintaining efficiency and performance.',
      titulointeligenciaEmocional:'Emotional Intelligence',
      inteligenciaEmocional:'Ability to recognize, understand and manage your own emotions and those of others, improving relationships and decisions.',
      react:'I develop interactive and modern user interfaces using React. With an emphasis on creating reusable components and efficient state management, I aim to provide a fluid and responsive user experience.',
      NET:'I develop robust and scalable applications using .NET, focusing on performance and code quality to create efficient solutions.',
      python:'I use Python to create efficient applications and scripts. With an approach focused on automation, data analysis and web development, I seek to offer practical and scalable solutions to various problems.',
      calculadora:'Calculator',
      tempo:'Weather forecast',
      comida:'Application Delivery',
      pizza: 'Predict Pizza Value',
      tarefa: 'Task List',
      txtsecpro: 'Junior Full-Stack Programmer',
      cpp: 'I develop high-performance solutions using C++. With a focus on efficiency and optimization, it applies best practices to create robust, low-level applications that meet demanding performance requirements.',
      sobrepra: 'Nice to meet you, <span> I´m Matheus Gabriel</span>',
      sobrep1: 'I´m 20 years old, I´m a junior programmer and a student of <span>Computer Science.</span> I´m passionate about technology and always looking to learn something new. I love solving <span>problems</span> and facing challenges in the world of programming, always wanting to <span>improve</span> and evolve.',
      sobrep2: 'With 1 year of <span>experience</span> in Java, databases and Linux, I have participated in projects that challenged me to <span>develop</span> efficient and creative solutions. I am always looking for new opportunities to <span>expand</span> my knowledge and contribute positively to each <span>team</span> of which I am part. My goal is to grow in the technology area, continually <span>improving myself</span> and always delivering my best.'
    }
  };


  
  function updateContent(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.dataset.i18n;
        const textContent = texts[language][key];
        if (textContent !== undefined) {
            if (element.tagName === 'BUTTON' || (element.tagName === 'A' && element.querySelector('button'))) {
                // Atualiza o texto dentro do botão, preservando o HTML externo
                element.querySelector('button').innerHTML = textContent;
            } else {
                // Atualiza o texto diretamente para outros elementos
                element.innerHTML = textContent;
            }
            if (texts[language] && texts[language][key]) {
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', texts[language][key]);
                }
            }
        }
    });
}

// Adiciona evento para a seleção de idioma
document.querySelectorAll('.language-options li').forEach(item => {
    item.addEventListener('click', () => {
        const selectedLanguage = item.getAttribute('data-value');
        document.querySelector('.selected-language').textContent = item.textContent;
        updateContent(selectedLanguage);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o EmailJS com a chave pública
    emailjs.init("xsX5RC_WnmMJagVfu");

    // Seleciona o formulário corretamente usando o novo ID
    const form = document.getElementById('formulario-form'); // Certifique-se de usar o ID correto do form

    // Verifica se o formulário foi corretamente capturado
    if (form) {
        console.log("Formulário encontrado:", form); // Confirma que o formulário foi capturado
    } else {
        console.error("Formulário não encontrado! Verifique o ID.");
        return;
    }

    // Adiciona o evento de submit ao formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Envia o formulário via EmailJS, passando o elemento form
        emailjs.sendForm('service_ha9i6at', 'template_98dh1sq', form)
        .then(function() {
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            alert('Ocorreu um erro ao enviar sua mensagem. Erro: ' + JSON.stringify(error));
        });
    });
});

