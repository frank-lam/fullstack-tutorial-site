(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{241:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("这是一篇入门级使用指南，更多详细的请参考 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 官网电子书"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("在这里将列举一些常用命令和场景解决方案，欢迎大家补充学习。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("在软件开发过程，每天都会产生新的代码，代码合并的过程中可能会出现如下问题：")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("因此，我们希望有一种机制，能够帮助我们：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("一个标准的版本控制系统 Version Control System (VCS)，通常需要有以下功能：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("版本控制系统发展至今有几种不同的模式：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("中央集中式版本控制系统团队共用仓库，当某人需要编辑文件时，进行锁定，以免其他人同时编辑时造成冲突。缺点是虽然避免了冲突，但不是很方便。其他人需要排队才能编辑文件，如果有人编辑了很久或是忘记解锁就会造成其他人长时间等待的情况。")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("中央集中式版本控制系统团队共用仓库，不采用悲观锁方式来避免冲突，而是事后发现如果别人也修改相同文件(冲突)，再进行手动修改解决。有很多 VCS 属于这种类型，如：CVS，Subversion，Perforce 等")]),t._v(" "),e("p",[t._v("中央集中式版本控制系统的共同问题是，做任何操作都需要和服务器同步，如果服务器宕机则会造成无法继续工作的窘迫。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("ul",[e("li",[e("p",[t._v("Git 官网下载地址："),e("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 版本管理工具"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("客户端推荐："),e("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SourceTree"),e("OutboundLink")],1),t._v("，软件安装跳过注册，"),e("a",{attrs:{href:"https://www.cnblogs.com/lucio110/p/8192792.html?tdsourcetag=s_pcqq_aiomsg",target:"_blank",rel:"noopener noreferrer"}},[t._v("请参考这里"),e("OutboundLink")],1)])])]),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("一图胜千言")]),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("推荐一个不错的可视化工具："),e("a",{attrs:{href:"http://ndpsoftware.com/git-cheatsheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Cheat Sheet"),e("OutboundLink")],1)]),t._v(" "),t._m(21),t._v(" "),e("p",[t._v("设置提交者姓名")]),t._v(" "),t._m(22),e("p",[t._v("设置提交者邮箱")]),t._v(" "),t._m(23),e("p",[t._v("查看配置列表")]),t._v(" "),t._m(24),t._m(25),t._v(" "),e("p",[t._v("在指定目录创建仓库，如果没有指定目录名将在当前目录创建仓库")]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),e("p",[t._v("将文件或目录中已修改的代码添加追暂存区")]),t._v(" "),t._m(29),e("p",[t._v("提交暂存区内容")]),t._v(" "),t._m(30),e("p",[t._v("查看仓库状态")]),t._v(" "),t._m(31),t._m(32),t._v(" "),e("p",[t._v("比对当前内容和暂存区内容")]),t._v(" "),t._m(33),e("p",[t._v("比对当前内容和最近一次提交")]),t._v(" "),t._m(34),e("p",[t._v("比对当前内容和倒数第二次提交")]),t._v(" "),t._m(35),e("p",[t._v("比对最近两次提交")]),t._v(" "),t._m(36),t._m(37),t._v(" "),e("p",[t._v("查看提交历史")]),t._v(" "),t._m(38),e("p",[t._v("打印为单行log")]),t._v(" "),t._m(39),e("p",[t._v("打印所有记录（忽略HEAD的位置）")]),t._v(" "),t._m(40),e("p",[t._v("打印示意图（忽略HEAD的位置）")]),t._v(" "),t._m(41),t._m(42),t._v(" "),e("p",[t._v("查看所有分支")]),t._v(" "),t._m(43),e("p",[t._v("有分支：创建分支，无分支：列出所有分支")]),t._v(" "),t._m(44),e("p",[t._v("切换至分支")]),t._v(" "),t._m(45),e("p",[t._v("创建并切换至分支分支")]),t._v(" "),t._m(46),e("p",[t._v("将分支与当前分支合并")]),t._v(" "),t._m(47),t._m(48),t._v(" "),e("p",[t._v("拉取远程仓库")]),t._v(" "),t._m(49),e("p",[t._v("推送至远程仓库")]),t._v(" "),t._m(50),e("p",[t._v("新增远程仓库 origin")]),t._v(" "),t._m(51),e("p",[t._v("修改远程仓库 origin")]),t._v(" "),t._m(52),t._m(53),t._v(" "),t._m(54),t._v(" "),e("p",[t._v("Git提示：up-to-date，但未得到删除的文件")]),t._v(" "),e("p",[t._v("原因：当前本地库处于另一个分支中，需将本分支发 Head 重置至 master")]),t._v(" "),t._m(55),e("p",[t._v("git 强行 pull 并覆盖本地文件")]),t._v(" "),t._m(56),t._m(57),t._v(" "),e("p",[t._v("应用场景：")]),t._v(" "),t._m(58),t._v(" "),e("p",[t._v("总的来说，git stash 命令的作用就是将目前还不想提交的但是已经修改的内容进行保存至堆栈中，后续可以在某个分支上恢复出堆栈中的内容。这也就是说，stash 中的内容不仅仅可以恢复到原先开发的分支，也可以恢复到其他任意指定的分支上。git stash 作用的范围包括工作区和暂存区中的内容，也就是说没有提交的内容都会保存至堆栈中。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%82%A8%E8%97%8F%E4%B8%8E%E6%B8%85%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git - 储藏与清理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/stone_yw/article/details/80795669",target:"_blank",rel:"noopener noreferrer"}},[t._v("git stash详解 - stone_yw的博客 - CSDN博客"),e("OutboundLink")],1)])]),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),e("p",[t._v("大多数 Git 服务器都会选择使用 SSH 公钥来进行授权。系统中的每个用户都必须提供一个公钥用于授权，没有的话就要生成一个。生成公钥的过程在所有操作系统上都差不多。首先你要确认一下本机是否已经有一个公钥。")]),t._v(" "),e("p",[t._v("SSH 公钥默认储存在账户的主目录下的 ~/.ssh 目录。进去看看：")]),t._v(" "),t._m(61),e("p",[t._v("看一下有没有id_rsa和id_rsa.pub(或者是id_dsa和id_dsa.pub之类成对的文件)，有 .pub 后缀的文件就是公钥，另一个文件则是密钥。")]),t._v(" "),e("p",[t._v("假如没有这些文件，甚至连 .ssh 目录都没有，可以用 ssh-keygen 来创建。该程序在 Linux/Mac 系统上由 SSH 包提供，而在 Windows 上则包含在 MSysGit 包里：")]),t._v(" "),t._m(62),e("p",[t._v("直接按Enter就行。然后，会提示你输入密码，如下(建议输一个，安全一点，当然不输也行，应该不会有人闲的无聊冒充你去修改你的代码)：")]),t._v(" "),t._m(63),e("p",[t._v("完了之后，大概是这样：")]),t._v(" "),t._m(64),e("p",[t._v("到此为止，你本地的密钥对就生成了。")]),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67),t._m(68),t._v(" "),e("p",[t._v("完成以后，验证下这个key是不是正常工作：")]),t._v(" "),t._m(69),e("p",[t._v("如果，看到：")]),t._v(" "),t._m(70),e("p",[t._v("恭喜你，你的设置已经成功了。")]),t._v(" "),t._m(71),t._v(" "),e("p",[t._v("使用命令 git remote -v 查看你当前的 remote url")]),t._v(" "),t._m(72),e("p",[t._v("如果是以上的结果那么说明此项目是使用https协议进行访问的（如果地址是git开头则表示是git协议）")]),t._v(" "),e("p",[t._v("你可以登陆你的github，就像本文开头的图例，你在上面可以看到你的ssh协议相应的url，类似：")]),t._v(" "),t._m(73),t._v(" "),e("p",[t._v("复制此ssh链接，然后使用命令 git remote set-url 来调整你的url。")]),t._v(" "),t._m(74),e("p",[t._v("然后你可以再用命令 git remote -v 查看一下，url是否已经变成了ssh地址。")]),t._v(" "),e("p",[t._v("然后你就可以愉快的使用 git fetch, git pull , git push，再也不用输入烦人的密码了")]),t._v(" "),t._m(75),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/hanxianlong/p/3464224.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 提交大文件提示 fatal: The remote end hung up unexpectedly - WNFK - 博客园"),e("OutboundLink")],1)])]),t._v(" "),t._m(76),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/wangshuo1/p/5531200.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Pull 避免用户名和密码方法 - 王信平 - 博客园"),e("OutboundLink")],1)])]),t._v(" "),t._m(77),t._v(" "),e("p",[t._v("利用Git版本管理将只修改过的文件上传到FTP服务器 支持SFTP协议 - 吕滔博客\nhttps://lvtao.net/tool/gitftp.html")]),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),e("p",[t._v("git学习：关于origin和master - mashiqi - 博客园\nhttps://www.cnblogs.com/mashiqi/p/6002671.html")]),t._v(" "),e("p",[t._v("Git 里面的 origin 到底代表啥意思? - Not Only DBA. - CSDN博客\nhttps://blog.csdn.net/u011478909/article/details/77683754")])])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("a",{attrs:{href:"#%E5%89%8D%E8%A8%80"}},[t._v("前言")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%80git-%E7%AE%80%E4%BB%8B"}},[t._v("一、Git 简介")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9F"}},[t._v("什么是版本控制系统")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E7%89%88%E6%9C%AC-%E6%8E%A7%E5%88%B6"}},[t._v("为什么需要版本 控制")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9F-1"}},[t._v("什么是版本控制系统")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%8F%91%E5%B1%95%E5%8F%B2"}},[t._v("版本控制系统的发展史")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF-git"}},[t._v("什么是 Git")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85-git"}},[t._v("如何安装 Git")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8Cgit-%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E9%80%9F%E6%9F%A5"}},[t._v("二、Git 常用命令速查")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE"}},[t._v("配置")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C"}},[t._v("基础操作")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%AF%94%E5%AF%B9-diff"}},[t._v("比对 diff")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8E%86%E5%8F%B2-log"}},[t._v("历史 log")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%88%86%E6%94%AF-branch"}},[t._v("分支 branch")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E8%BF%9C%E7%A8%8B"}},[t._v("远程")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89git-%E5%B8%B8%E7%94%A8%E5%9C%BA%E6%99%AF"}},[t._v("三、Git 常用场景")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#1-%E5%88%A0%E9%99%A4%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6%E5%90%8E%E6%83%B3%E4%BB%8E%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E4%B8%AD%E9%87%8D%E6%96%B0pull%E6%9C%80%E6%96%B0%E7%89%88%E6%96%87%E4%BB%B6"}},[t._v("1. 删除本地文件后，想从远程仓库中重新Pull最新版文件")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#2-%E5%82%A8%E8%97%8F%E4%B8%8E%E6%B8%85%E7%90%86"}},[t._v("2. 储藏与清理")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"一、git-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、git-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、Git 简介")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是版本控制系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是版本控制系统")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"为什么需要版本-控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要版本-控制","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么需要版本 控制")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("代码被覆盖或丢失")]),t._v(" "),e("li",[t._v("代码写的不理想希望还原之前的版本")]),t._v(" "),e("li",[t._v("希望知道与之前版本的差别")]),t._v(" "),e("li",[t._v("是谁修改了代码以及为什么修改")]),t._v(" "),e("li",[t._v("发版时希望分成不同的版本(测试版、发行版等)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("可以随时回滚到之前的版本")]),this._v(" "),s("li",[this._v("协同开发时不会覆盖别人的代码")]),this._v(" "),s("li",[this._v("留下修改记录，以便随时查看")]),this._v(" "),s("li",[this._v("发版时可以方便的管理不同的版本")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"什么是版本控制系统-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是版本控制系统-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是版本控制系统")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("能够创建 Repository (仓库)，用来保存代码")]),t._v(" "),e("li",[t._v("协同开发时方便将代码分发给团队成员")]),t._v(" "),e("li",[t._v("记录每次修改代码的内容、时间、原因等信息")]),t._v(" "),e("li",[t._v("能够创建 Branch (分支)，可以根据不同的场景进行开发")]),t._v(" "),e("li",[t._v("能够创建 Tag (标签)，建立项目里程碑")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"版本控制系统的发展史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本控制系统的发展史","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本控制系统的发展史")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Local VCS")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("本地使用 "),s("code",[this._v("复制/粘贴")]),this._v(" 的方式进行管理，缺点是无法协同开发")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Centralized VCS (Lock，悲观锁)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Centralized VCS (Merge，乐观锁)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Distributed VCS")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("分布式版本控制系统，本地也拥有完整的代码仓库，就不会出现上述集中式管理的问题，即使没有网络，依然可以 "),s("code",[this._v("commit")]),this._v(" 和看 "),s("code",[this._v("log")]),this._v("，也无需担心服务器同步问题。如：Git，Mercurial，Bazaar 等就属于分布式版本控制系统。缺点是功能比较复杂，上手需要一定的学习时间。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-git","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是 Git")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。")]),this._v(" "),s("li",[this._v("Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。")]),this._v(" "),s("li",[this._v("Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何安装-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何安装-git","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何安装 Git")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"二、git-常用命令速查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、git-常用命令速查","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、Git 常用命令速查")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"assets/TQDj8Uo1pj3YkMSoeSitYC1QB4a019V68N6GZFBE.png",alt:"img"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"John Doe"')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global user.email johndoe@example.com\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --list\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基础操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础操作")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目录名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前文件夹初始化")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定目录")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init frank\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("从指定地址克隆仓库，若不指定"),s("code",[this._v("目录名")]),this._v("将默认创建与远程同名目录")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程仓库地址"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目录名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不想创建目录，目录名为 . ，直接加在内容到当前目录下")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/frank-lam/2019_campus_apply.git "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目录名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("文件名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"<注释>"')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" status\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"比对-diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比对-diff","aria-hidden":"true"}},[this._v("#")]),this._v(" 比对 diff")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("diff")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("diff")]),this._v(" HEAD\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("diff")]),this._v(" HEAD^\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("diff")]),this._v(" HEAD^ HEAD\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"历史-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#历史-log","aria-hidden":"true"}},[this._v("#")]),this._v(" 历史 log")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" log --oneline\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" log --oneline\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" log --all\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" log --graph\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"分支-branch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支-branch","aria-hidden":"true"}},[this._v("#")]),this._v(" 分支 branch")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" branch\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("分支"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("分支"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"远程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程","aria-hidden":"true"}},[this._v("#")]),this._v(" 远程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" pull\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程仓库"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" remote add origin https://xxx.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" remote set-url origin https://xxx.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"三、git-常用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、git-常用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、Git 常用场景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-删除本地文件后，想从远程仓库中重新-pull-最新版文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-删除本地文件后，想从远程仓库中重新-pull-最新版文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 删除本地文件后，想从远程仓库中重新 Pull 最新版文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" checkout master \n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" reset --hard\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" fetch --all  \n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" reset --hard origin/master \n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" pull\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-储藏与清理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-储藏与清理","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 储藏与清理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("当正在 dev 分支上开发某个项目，这时项目中出现一个 bug，需要紧急修复，但是正在开发的内容只是完成一半，还不想提交，这时可以用 git stash 命令将修改的内容保存至堆栈区，然后顺利切换到 hotfix 分支进行 bug 修复，修复完成后，再次切回到 dev 分支，从堆栈中恢复刚刚保存的内容。")]),this._v(" "),s("li",[this._v("由于疏忽，本应该在 dev 分支开发的内容，却在 master 上进行了开发，需要重新切回到 dev 分支上进行开发，可以用 git stash 将内容保存至堆栈中，切回到 dev 分支后，再次恢复内容即可。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-ssh-连接配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ssh-连接配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. SSH 连接配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-生成密钥对"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成密钥对","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 生成密钥对")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" ~/.ssh\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("ls")]),this._v("\nauthorized_keys2  id_dsa       known_hosts config            id_dsa.pub\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ ssh-keygen -t rsa -C "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_email@youremail.com"')]),t._v("\n\nCreates a new "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" key using the provided email "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generating public/private rsa key pair.")]),t._v("\n\nEnter "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" to save the key "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/home/you/.ssh/id_rsa"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("Enter same passphrase again: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("Type passphrase again"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("Your public key has been saved "),s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("in")]),this._v(" /home/you/.ssh/id_rsa.pub.\nThe key fingerprint is: "),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@youremail.com")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-添加公钥到你的远程仓库（github）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加公钥到你的远程仓库（github）","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 添加公钥到你的远程仓库（github）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("查看你生成的公钥：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ cat ~/.ssh/id_rsa.pub\n\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC0X6L1zLL4VHuvGb8aJH3ippTozmReSUzgntvk434aJ/v7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8vR3c8E7CjZN733f5AL8uEYJA+YZevY5UCvEg+umT7PHghKYaJwaCxV7sjYP7Z6V79OMCEAGDNXC26IBMdMgOluQjp6o6j2KAdtRBdCDS/QIU5THQDxJ9lBXjk1fiq9tITo/aXBvjZeD+gH/Apkh/0GbO8VQLiYYmNfqqAHHeXdltORn8N7C9lOa/UW3KM7QdXo6J0GFlBVQeTE/IGqhMS5PMln3 admin@admin-PC\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[s("p",[this._v("登陆你的 GitHub 帐户。点击你的头像，然后 "),s("code",[this._v("Settings -> 左栏点击 SSH and GPG keys -> 点击 New SSH key")])])]),this._v(" "),s("li",[s("p",[this._v("然后你复制上面的公钥内容，粘贴进“Key”文本域内。 title域，自己随便起个名字。")])]),this._v(" "),s("li",[s("p",[this._v("点击 Add key。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("ssh")]),this._v(" -T git@github.com\n\nAttempts to "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("ssh")]),this._v(" to github\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Hi xxx! You've successfully authenticated, but GitHub does not # provide shell access.\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-修改git的remote-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改git的remote-url","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 修改git的remote url")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin https://github.com/someaccount/someproject.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin https://github.com/someaccount/someproject.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"assets/1160195-20170512120555144-795931549.png",alt:"img"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" remote set-url origin git@github.com:someaccount/someproject.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常见问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 常见问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-git-记住密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-git-记住密码","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Git 记住密码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-git-ftp-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-git-ftp-使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. Git FTP 使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_6-git-删除文件如何提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-git-删除文件如何提交","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. Git 删除文件如何提交")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_7-git-中的-origin-是什么意思"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-git-中的-origin-是什么意思","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. Git 中的 origin 是什么意思")])}],!1,null,null,null);r.options.__file="Git.md";s.default=r.exports}}]);