# Mangazin

O projeto Mangazin é um projeto de registro de mangas e animes e seus respectivos autores e estudios, onde os mangas podem nao necessariamente ser animes tambem ou vice-versa. Este possuirá uma entidade Usuario podendo criar as entidades manga, anime, autor e estudio.

A entidade Usuario devera conter os campos login e senha e esta so sera armazenada apos encriptada atraves de um hash.

A entidade manga tera o campo de nome e a relacao com seu autor e sua possivel relacao com o anime.

A entidade anime tera o campos de nome e a relacao com seu estudio e sua possivel relacao com o manga.

A entidade autor tera o campo nome e a relacao com seu manga.

A entidade estudio tera o campos nome e a relacao com o anime.

Todas as entidades terao um UUID chamado id:string.