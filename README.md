# 🚀 Kubernetes 运维工具箱 | K8S Admin Toolkit

[![GitHub Pages](https://img.shields.io/badge/Docs-GitHub%20Pages-blue?style=flat-square)](https://pungyoung.github.io/pungyoung.github.io/)
[![License](https://img.shields.io/github/license/pungyoung/pungyoung.github.io?style=flat-square)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/pungyoung/pungyoung.github.io?style=flat-square)](https://github.com/pungyoung/pungyoung.github.io/commits/main)

**专为 Kubernetes 运维工程师打造的开源工具集，集成监控、诊断、自动化脚本和最佳实践文档，助力高效管理集群。**  
通过 GitHub Pages 提供在线文档和交互式 Demo，支持快速上手和实战参考。

---

## 📌 项目背景
在管理多集群、高并发的 Kubernetes 环境时，运维人员常面临以下挑战：
- **监控盲区**：缺乏统一的指标收集和告警策略
- **故障定位慢**：日志分散、事件追踪困难
- **重复劳动**：资源清理、批量操作等耗时且易出错

本工具箱旨在通过 **标准化工具链** 和 **可视化文档**，降低 K8S 运维复杂度，提升团队效率。

---

## 🌟 核心功能
### 1. 集群监控与可视化
- **一键部署 Prometheus + Grafana**：预置 Node Exporter、cAdvisor、Kube-State-Metrics 监控模板
- **自定义告警规则**：覆盖 CPU/内存/磁盘/Pod 异常等场景，支持 Alertmanager 集成
- **交互式仪表盘**：通过 GitHub Pages 展示实时集群状态（如 [示例仪表盘](https://pungyoung.github.io/pungyoung.github.io/dashboards/)）