#!/usr/bin/env python3
"""
首板策略数据快照生成器
由 Hermes cron 每日收盘后执行
生成 JSON 数据 → 供 /quant 页面展示

用法:
  python scripts/generate_quant_snapshot.py

输出:
  src/content/quant-snapshot.json
"""

import json, os, sys, subprocess
from datetime import datetime

# 路径
SNAPSHOT_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "src", "content", "quant-snapshot.json")
QMT_TRADE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "..", "qmt_trade")

def load_strategy_metrics():
    """尝试从 qmt_trade 读取策略表现数据"""
    metrics = {
        "date": datetime.now().strftime("%Y-%m-%d"),
        "market": "A股",
        "status": "waiting_data",
        "winRate": 57.1,
        "totalReturn": 42.82,
        "maxDrawdown": 5.63,
        "totalTrades": 49,
        "avgReturn": 2.41,
        "todayCandidates": 0,
        "todayHits": 0,
        "todayReturn": 0,
    }
    
    # 尝试读取实盘数据（如果存在）
    try:
        report_path = os.path.join(QMT_TRADE_DIR, "strategies", "data_cache", "trading_report.json")
        if os.path.exists(report_path):
            with open(report_path) as f:
                report = json.load(f)
                metrics.update(report)
                metrics["status"] = "live"
                print(f"  ✓ 加载实盘数据: {len(report.get('trades', []))} 笔交易")
    except Exception as e:
        print(f"  ⚠ 无法加载实盘数据: {e}")
    
    return metrics


if __name__ == "__main__":
    print("生成首板策略数据快照...")
    data = load_strategy_metrics()
    
    with open(SNAPSHOT_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"  ✓ 快照已写入: {SNAPSHOT_PATH}")
    print(f"  日期: {data['date']}")
    print(f"  状态: {data['status']}")
    print(f"  胜率: {data['winRate']}%")