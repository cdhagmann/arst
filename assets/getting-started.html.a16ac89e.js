import{r as a,o as s,c as e,a as o,w as n,F as l,b as r,d as t}from"./app.87537386.js";const c={},i=r('<h1 id="comecando" tabindex="-1"><a class="header-anchor" href="#comecando" aria-hidden="true">#</a> Começando</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>A instalação do <code>asdf</code> envolve:</p><ol><li>Instalar as dependências</li><li>Instalar o núcleo do <code>asdf</code></li><li>Adicionar o <code>asdf</code> ao seu shell</li><li>Instalar um plugin para cada ferramenta que você gostaria de gerenciar</li><li>Instalar uma versão desta ferramenta</li><li>Definir uma versão global e uma versão local através do arquivo de configuração <code>.tool-versions</code></li></ol>',4),d=t("Você pode também acompanhar o passo a passo da instalação através "),p={href:"https://youtu.be/8W3xaSPjeog",target:"_blank",rel:"noopener noreferrer"},u=t("deste vídeo"),m=t("."),h=r('<h2 id="_1-instalando-as-dependencias" tabindex="-1"><a class="header-anchor" href="#_1-instalando-as-dependencias" aria-hidden="true">#</a> 1. Instalando as dependências</h2><p><strong>Linux</strong>:</p><table><thead><tr><th>Gerenciador de Pacotes</th><th>Comando</th></tr></thead><tbody><tr><td>Aptitude</td><td><code>sudo apt install curl git</code></td></tr><tr><td>DNF</td><td><code>sudo dnf install curl git</code></td></tr><tr><td>Pacman</td><td><code>sudo pacman -S curl git</code></td></tr><tr><td>Zypper</td><td><code>sudo zypper install curl git</code></td></tr></tbody></table><p><strong>macOS</strong>:</p><table><thead><tr><th>Gerenciador de Pacotes</th><th>Comando</th></tr></thead><tbody><tr><td>Homebrew</td><td>As dependências serão automaticamente instaladas pelo Homebrew.</td></tr><tr><td>Spack</td><td><code>spack install coreutils curl git</code></td></tr></tbody></table><h2 id="_2-instalando-o-asdf" tabindex="-1"><a class="header-anchor" href="#_2-instalando-o-asdf" aria-hidden="true">#</a> 2. Instalando o asdf</h2><p>Nós recomendamos a instalação através do Git, entretanto existem outros métodos específicos para algumas plataformas:</p>',7),g=o("thead",null,[o("tr",null,[o("th",null,"Método"),o("th",null,"Comando")])],-1),F=o("tr",null,[o("td",null,"Git"),o("td",null,[o("code",null,"git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0")])],-1),f=o("tr",null,[o("td",null,"Homebrew"),o("td",null,[o("code",null,"brew install asdf")])],-1),v=o("td",null,"Pacman",-1),y=o("code",null,"git clone https://aur.archlinux.org/asdf-vm.git && cd asdf-vm && makepkg -si",-1),b=t(" or use your preferred "),k={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},x=t("AUR helper"),q=r('<h2 id="_3-adicionando-ao-seu-shell" tabindex="-1"><a class="header-anchor" href="#_3-adicionando-ao-seu-shell" aria-hidden="true">#</a> 3. Adicionando ao seu shell</h2><p>Existem diversas combinações de shells, sistemas operacionais e métodos de instalação que podem impactar a configuração. Abaixo, expanda a seção que se adeque mais com o seu sistema:</p><details class="custom-container details"><summary>Bash &amp; Git</summary><p>Adicione esta linha ao seu <code>~/.bashrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>O auto completar deve ser configurado manualmente a partir da adição da seguinte linha ao <code>.bashrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><p>Se você estiver usando o <strong>macOS Catalina ou mais recente</strong>, o shell padrão mudou para o <strong>ZSH</strong>. A não ser que você tenha voltado para o bash, siga as instruções de instalação para o ZSH.</p><p>Adicione esta linha ao seu <code>~/.bash_profile</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>O auto completar deve ser configurado manualmente a partir da adição da seguinte linha ao <code>.bash_profile</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>',4),_={class:"custom-container details"},z=r('<summary>Bash &amp; Homebrew (macOS)</summary><p>Se você estiver usando o <strong>macOS Catalina ou mais recente</strong>, o shell padrão mudou para o <strong>ZSH</strong>. A não ser que você tenha voltado para o bash, siga as instruções de instalação para o ZSH.</p><p>Adicione <code>asdf.sh</code> ao <code>~/.bash_profile</code> através do comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>\n<span class="line"></span></code></pre></div>',4),E=t("O auto completar deve ser configurado seguindo as "),D={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},S=t("instruções da Homebrew"),H=t(", ou as seguintes:"),w=r('<div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/etc/bash_completion.d/asdf.bash&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>\n<span class="line"></span></code></pre></div>',1),A={class:"custom-container details"},O=r('<summary>Bash &amp; Pacman</summary><p>Adicione a seguinte linha ao seu <code>~/.bashrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),j=t("O "),$={href:"https://wiki.archlinux.org/title/bash#Common_programs_and_options",target:"_blank",rel:"noopener noreferrer"},Z=t("pacote "),P=o("code",null,"bash-completion",-1),B=t(" precisa ser instalado para o auto completar funcionar."),I=r('<details class="custom-container details"><summary>Fish &amp; Git</summary><p>Adicione a seguinte linha ao seu <code>~/.config/fish/config.fish</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>O auto completar deve ser configurado manualmente através do seguinte comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> and ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/completions/asdf.fish </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span></span>\n<span class="line"></span></code></pre></div></details>',1),C={class:"custom-container details"},G=r('<summary>Fish &amp; Homebrew</summary><p>Adicione <code>asdf.fish</code> ao seu <code>~/.config/fish/config.fish</code> através do comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\nsource &quot;</span><span style="color:#F8F8F2;">(brew --prefix asdf)</span><span style="color:#E6DB74;">&quot;/asdf.fish&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/config.fish</span></span>\n<span class="line"></span></code></pre></div>',3),M=t("O auto completar é "),R={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-fish",target:"_blank",rel:"noopener noreferrer"},N=t("configurado pela Homebrew para o fish shell"),U=t("."),V=r('<details class="custom-container details"><summary>Fish &amp; Pacman</summary><p>Adicione a seguinte linha ao seu <code>~/.config/fish/config.fish</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>O auto completar é configurado automaticamente durante a instalação do pacote AUR.</p></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><p>Adicione <code>asdf.elv</code> ao <code>~/.config/elvish/rc.elv</code> através do comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"></span></code></pre></div><p>Ao concluir atualizará automaticamente</p></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><p>Adicione <code>asdf.elv</code> ao <code>~/.config/elvish/rc.elv</code> através do comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s (brew --prefix asdf)/libexec/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"></span></code></pre></div><p>Ao concluir atualizará automaticamente</p></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><p>Adicione <code>asdf.elv</code> ao <code>~/.config/elvish/rc.elv</code> através do comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s /opt/asdf-vm/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>\n<span class="line"></span></code></pre></div><p>Ao concluir atualizará automaticamente</p></details>',4),L={class:"custom-container details"},W=r('<summary>ZSH &amp; Git</summary><p>Adicione a seguinte linha ao seu <code>~/.zshrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),T=o("strong",null,"OU",-1),Q=t(" utilize um framework para ZSH, como "),J={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},K=t("asdf para oh-my-zsh"),X=t(" que irá adicionar o script e o auto completar."),Y=r('<p>O auto completar pode ser configurado ou pelo plugin do asdf para framework para ZSH, ou através da adição das seguintes linhas ao seu <code>.zshrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># append completions to fpath</span></span>\n<span class="line"><span style="color:#F8F8F2;">fpath=(${ASDF_DIR}/completions $fpath)</span></span>\n<span class="line"><span style="color:#88846F;"># initialise completions with ZSH&#39;s compinit</span></span>\n<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> compinit</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>Se você está utilizando uma configuração <code>compinit</code> customizada, garanta que <code>compinit</code> esteja abaixo chamada <code>asdf.sh</code></li><li>Se você está utilizando uma configuração <code>compinit</code> customizada com um framework para ZSH, garanta que <code>compinit</code> esteja abaixo da chamada do framework.</li></ul><p><strong>Aviso</strong></p>',4),aa=t("Se você está utilizando um framework para ZSH, o plugin do asdf pode precisar ser atualizado para utilização adequada do novo auto completar do ZSH através do "),sa=o("code",null,"fpath",-1),ea=t(". O plugin do asdf para o oh-my-zsh ainda não foi atualizado, veja: "),oa={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},na=t("ohmyzsh/ohmyzsh#8837"),la=t("."),ra={class:"custom-container details"},ta=r('<summary>ZSH &amp; Homebrew</summary><p>Adicione <code>asdf.sh</code> ao seu <code>~/.zshrc</code> através do comando:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> ${ZDOTDIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">~}/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),ca=o("strong",null,"OU",-1),ia=t(" utilize um framework para ZSH, como "),da={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},pa=t("asdf para oh-my-zsh"),ua=t(" que irá adicionar o script e o auto completar."),ma=t("O auto completar pode ser configurado ou pelo framework para ZSH, ou de acordo com as "),ha={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-zsh",target:"_blank",rel:"noopener noreferrer"},ga=t("instruções da Homebrew"),Fa=t(". Se você está usando um framework para ZSH, pode ser que seja necessário atualizar o plugin do asdf para que o novo auto completar funcione adequadamente através do "),fa=o("code",null,"fpath",-1),va=t(". O plugin do asdf para o Oh-My-ZSH ainda será atualizado, veja: "),ya={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},ba=t("ohmyzsh/ohmyzsh#8837"),ka=t("."),xa={class:"custom-container details"},qa=r('<summary>ZSH &amp; Pacman</summary><p>Adicione a seguinte linha ao seu <code>~/.zshrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),_a=t("O auto completar é colocado em um local familiar para o ZSH, "),za={href:"https://wiki.archlinux.org/index.php/zsh#Command_completion",target:"_blank",rel:"noopener noreferrer"},Ea=t("mas o ZSH deve ser configurado para conseguir utilizá-lo"),Da=t("."),Sa=r('<p>Os scripts do <code>asdf</code> precisam ser chamados <strong>depois</strong> de ter configurado a sua variável <code>$PATH</code> e <strong>depois</strong> de ter chamado o seu framework para ZSH (oh-my-zsh etc).</p><p>Reinicie seu shell para que as mudanças na variável <code>PATH</code> tenham efeito. Abrir uma nova janela/sessão de terminal o fará.</p><h2 id="_4-instalando-um-plugin" tabindex="-1"><a class="header-anchor" href="#_4-instalando-um-plugin" aria-hidden="true">#</a> 4. Instalando um plugin</h2>',3),Ha=t("Para demonstração, vamos instalar e configurar o "),wa={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},Aa=t("Node.js"),Oa=t(" através do plugin "),ja={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},$a=o("code",null,"asdf-nodejs",-1),Za=t("."),Pa=r('<h3 id="dependencias-dos-plugins" tabindex="-1"><a class="header-anchor" href="#dependencias-dos-plugins" aria-hidden="true">#</a> Dependências dos plugins</h3><p>Cada plugin possui algumas dependências, por isso precisamos checar no repositório onde elas estão listadas. Por exemplo, para o <code>asdf-nodejs</code> são:</p><table><thead><tr><th>SO</th><th>Instalação de dependencia</th></tr></thead><tbody><tr><td>Linux (Debian)</td><td><code>apt-get install dirmngr gpg curl gawk</code></td></tr><tr><td>macOS</td><td><code>brew install gpg gawk</code></td></tr></tbody></table><p>Devemos instalar instalar as dependências primeiro, pois alguns plugins exigem algumas ações após a instalação.</p><h3 id="instalando-o-plugin" tabindex="-1"><a class="header-anchor" href="#instalando-o-plugin" aria-hidden="true">#</a> Instalando o plugin</h3><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git</span></span>\n<span class="line"></span></code></pre></div><h2 id="_5-instalando-uma-versao" tabindex="-1"><a class="header-anchor" href="#_5-instalando-uma-versao" aria-hidden="true">#</a> 5. Instalando uma versão</h2><p>Agora temos o plugin para o Node.js, nós podemos instalar uma versão desta ferramenta.</p><p>Podemos ver quais versões tão disponíveis através do comando <code>asdf list all nodejs</code>, ou uma lista específica de versões com <code>asdf list all nodejs 14</code></p><p>Vamos instalar somente a última versão disponível, utilizando a tag <code>latest</code>:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install nodejs latest</span></span>\n<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Nota</p><p><code>asdf</code> exige versões exatas. A palavra <code>latest</code> resulta na instalação da versão atual na data da execução.</p></div><h2 id="_6-definindo-uma-versao" tabindex="-1"><a class="header-anchor" href="#_6-definindo-uma-versao" aria-hidden="true">#</a> 6. Definindo uma versão</h2><p><code>asdf</code> executa uma verificação das versões das ferramentas a serem utilizadas através do arquivo <code>.tool-versions</code> presente desde diretório atual, até o diretório <code>$HOME</code>. A varredura ocorre no momento em que você executa uma ferramenta que o asdf gerencia.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se uma versão não for especificada para uma ferramenta, ao executá-la resultará em erro. <code>asdf current</code> mostrará a ferramenta e sua versão, ou então a falta dela no seu diretório atual para que você possa observar quais ferramentas falharão ao serem executadas.</p></div><h3 id="versoes-globais" tabindex="-1"><a class="header-anchor" href="#versoes-globais" aria-hidden="true">#</a> Versões globais</h3><p>Os padrões globais são gerenciados em <code>$HOME/.tool-versions</code>. Defina uma versão global através do comando:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf global nodejs latest</span></span>\n<span class="line"></span></code></pre></div><p><code>$HOME/.tool-versions</code> ficará assim:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',20),Ba=t("Alguns sistemas operacionais vêm por padrão com ferramentas que são gerenciadas pelo próprio sistema e não pelo "),Ia=o("code",null,"asdf",-1),Ca=t(", "),Ga=o("code",null,"python",-1),Ma=t(" é um exemplo. Você precisa indicar para o "),Ra=o("code",null,"asdf",-1),Na=t(" para devolver o gerenciamento para o sistema. A "),Ua=t("seção de referência de versões"),Va=t(" irá guiá-lo."),La=r('<h3 id="versoes-locais" tabindex="-1"><a class="header-anchor" href="#versoes-locais" aria-hidden="true">#</a> Versões locais</h3><p>Versões locais são definidas no arquivo <code>$PWD/.tool-versions</code> (seu diretório atual). Geralmente, será um repositório Git para um projeto. Quando estiver no diretório desejado, execute:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> nodejs latest</span></span>\n<span class="line"></span></code></pre></div><p><code>$PWD/.tool-versions</code> ficará assim:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="usando-arquivos-de-versao-existentes" tabindex="-1"><a class="header-anchor" href="#usando-arquivos-de-versao-existentes" aria-hidden="true">#</a> Usando arquivos de versão existentes</h3><p><code>asdf</code> suporta a migração de arquivos de versão provenientes de outros gerenciadores de versão. Por exemplo: <code>.ruby-version</code> para o <code>rbenv</code>. Essa funcionalidade é baseada no plugin de cada ferramenta.</p>',7),Wa=t("O "),Ta={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},Qa=o("code",null,"asdf-nodejs",-1),Ja=t(" suporta tanto arquivos "),Ka=o("code",null,".nvmrc",-1),Xa=t(" quanto "),Ya=o("code",null,".node-version",-1),as=t(". Para ativar essa funcionalidade, adicione a seguinte linha ao seu arquivo de configuração do "),ss=o("code",null,"asdf",-1),es=t(" - "),os=o("code",null,"$HOME/.asdfrc",-1),ns=t(":"),ls=r('<div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = yes\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),rs=t("Veja a página de refencia da "),ts=t("configuração"),cs=t(" para mais opções de configuração."),is=r('<h2 id="setup-finalizado" tabindex="-1"><a class="header-anchor" href="#setup-finalizado" aria-hidden="true">#</a> Setup finalizado!</h2><p>A configuração inicial do <code>asdf</code> foi finalizada 🎉. Agora, você pode gerenciar versões do <code>nodejs</code> para o seus projetos. Siga passos semelhantes para cada ferramenta do seu projeto.</p><p>O <code>asdf</code> possui diversos outros comandos para se acustomar ainda, você pode ver todos eles através do comando <code>asdf --help</code> ou simplesmente <code>asdf</code>. Eles estão divididos em três categorias:</p>',3),ds=t("núcleo "),ps=o("code",null,"asdf",-1),us=t("plugins"),ms=t("versões (de ferramentas)");c.render=function(r,t){const c=a("OutboundLink"),hs=a("RouterLink");return s(),e(l,null,[i,o("p",null,[d,o("a",p,[u,o(c)]),m]),h,o("table",null,[g,o("tbody",null,[F,f,o("tr",null,[v,o("td",null,[y,b,o("a",k,[x,o(c)])])])])]),q,o("details",_,[z,o("p",null,[E,o("a",D,[S,o(c)]),H]),w]),o("details",A,[O,o("p",null,[j,o("a",$,[Z,P,o(c)]),B])]),I,o("details",C,[G,o("p",null,[M,o("a",R,[N,o(c)]),U])]),V,o("details",L,[W,o("p",null,[T,Q,o("a",J,[K,o(c)]),X]),Y,o("p",null,[aa,sa,ea,o("a",oa,[na,o(c)]),la])]),o("details",ra,[ta,o("p",null,[ca,ia,o("a",da,[pa,o(c)]),ua]),o("p",null,[ma,o("a",ha,[ga,o(c)]),Fa,fa,va,o("a",ya,[ba,o(c)]),ka])]),o("details",xa,[qa,o("p",null,[_a,o("a",za,[Ea,o(c)]),Da])]),Sa,o("p",null,[Ha,o("a",wa,[Aa,o(c)]),Oa,o("a",ja,[$a,o(c)]),Za]),Pa,o("p",null,[Ba,Ia,Ca,Ga,Ma,Ra,Na,o(hs,{to:"/pt-br/manage/versions.html"},{default:n((()=>[Ua])),_:1}),Va]),La,o("p",null,[Wa,o("a",Ta,[Qa,o(c)]),Ja,Ka,Xa,Ya,as,ss,es,os,ns]),ls,o("p",null,[rs,o(hs,{to:"/pt-br/manage/configuration.html"},{default:n((()=>[ts])),_:1}),cs]),is,o("ul",null,[o("li",null,[o(hs,{to:"/pt-br/manage/core.html"},{default:n((()=>[ds,ps])),_:1})]),o("li",null,[o(hs,{to:"/pt-br/manage/plugins.html"},{default:n((()=>[us])),_:1})]),o("li",null,[o(hs,{to:"/pt-br/manage/versions.html"},{default:n((()=>[ms])),_:1})])])],64)};export default c;
