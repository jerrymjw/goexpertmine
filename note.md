- 多讲少写

- 开会多，在一起讨论的时间多

- Stand up, 当你发现你可以胜任每一次Stand up 的时候，就代表你Job ready
- Kick off, 当一个功能，无论大小，都应该至少拉着一名其他组员一起讨论（划分组建层级）
- Retro, 每一个人都至少能在每个Collumn中功效一个意见
- Dojo / Showcase / Workshop,一个分享多平台

- 在一起讨论的时间多

- DevOps
  - ENVS
  - CICD
  - Infrastructure as code

# Environments

- Development（本地开发环境）
- Testing（远端测试环境，“公平公正”的独立于开发环境的远端环境，Nobody trust your dev env）
- Staging（无限接近生产环境多面向颞部的伪生产环境）
- Production（远端生产环境，你永远不应该在远端生产环境上做测试）

Development, Staging, Production

# Git

--- feature-header ---
--- master/main ---
--- feature-login ---

基于master分支多开发分支，独立且不影响master分支，通过回归master分支完成功能交付
master分支理论上是交付分支，所有产品目前所需要的功能都在master分支上，且master分支上可以保证正常工作的

# CICD

## Staging Env https://elastic-murdock-6c17ae.netlify.app/

## 持续部署