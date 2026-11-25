window.LocalLLMResults = {
  "schema_version": 2,
  "run_id": "20261125T213614Z",
  "run_at": "2026-11-25T21:36:14.495339+00:00",
  "status": "completed",
  "runtime": "llama.cpp",
  "runtime_build": "b12359-b1b770d90",
  "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
  "model_metadata": {
    "id": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
    "aliases": [
      ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf"
    ],
    "tags": [],
    "object": "model",
    "architecture": {
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ]
    },
    "created": 1795642574,
    "owned_by": "llamacpp",
    "meta": {
      "vocab_type": 2,
      "n_vocab": 49152,
      "n_ctx": 2048,
      "n_ctx_train": 8192,
      "n_embd": 576,
      "n_params": 134515008,
      "size": 103668480,
      "ftype": "Q4_K - Medium"
    }
  },
  "model_digest": "2e8040ceae7815abe0dcb3540b9995eaa1fa0d2ca9e797d0a635ae4433c68c2d",
  "hardware": "11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz | 2 physical cores / 4 logical CPUs | 7.65 GiB RAM | Windows CPU",
  "provenance": {
    "hardware": "11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz | 2 physical cores / 4 logical CPUs | 7.65 GiB RAM | Windows CPU",
    "cpu": "11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz",
    "physical_cores": 2,
    "logical_cpus": 4,
    "ram_bytes": 8215298048,
    "model_file": "SmolLM2-135M-Instruct-Q4_K_M.gguf",
    "model_bytes": 105454432,
    "model_sha256": "2e8040ceae7815abe0dcb3540b9995eaa1fa0d2ca9e797d0a635ae4433c68c2d",
    "launch_arguments": "-m SmolLM2-135M-Instruct-Q4_K_M.gguf --host 127.0.0.1 --port 8080 -c 2048",
    "accelerator": "CPU binary and process launch verified; no GPU requested"
  },
  "endpoint": "http://127.0.0.1:8080/v1/chat/completions",
  "health": {
    "status": "ok"
  },
  "models": {
    "models": [
      {
        "name": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "modified_at": "",
        "size": "",
        "digest": "",
        "type": "model",
        "description": "",
        "tags": [
          ""
        ],
        "capabilities": [
          "completion"
        ],
        "parameters": "",
        "details": {
          "parent_model": "",
          "format": "gguf",
          "family": "",
          "families": [
            ""
          ],
          "parameter_size": "",
          "quantization_level": ""
        }
      }
    ],
    "object": "list",
    "data": [
      {
        "id": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "aliases": [
          ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf"
        ],
        "tags": [],
        "object": "model",
        "architecture": {
          "input_modalities": [
            "text"
          ],
          "output_modalities": [
            "text"
          ]
        },
        "created": 1795642574,
        "owned_by": "llamacpp",
        "meta": {
          "vocab_type": 2,
          "n_vocab": 49152,
          "n_ctx": 2048,
          "n_ctx_train": 8192,
          "n_embd": 576,
          "n_params": 134515008,
          "size": 103668480,
          "ftype": "Q4_K - Medium"
        }
      }
    ]
  },
  "server_properties": {
    "default_generation_settings": {
      "params": {
        "seed": 4294967295,
        "temperature": 0.800000011920929,
        "dynatemp_range": 0.0,
        "dynatemp_exponent": 1.0,
        "top_k": 40,
        "top_p": 0.949999988079071,
        "min_p": 0.05000000074505806,
        "top_n_sigma": -1.0,
        "xtc_probability": 0.0,
        "xtc_threshold": 0.10000000149011612,
        "typical_p": 1.0,
        "repeat_last_n": 64,
        "repeat_penalty": 1.0,
        "presence_penalty": 0.0,
        "frequency_penalty": 0.0,
        "dry_multiplier": 0.0,
        "dry_base": 1.75,
        "dry_allowed_length": 2,
        "dry_penalty_last_n": 64,
        "mirostat": 0,
        "mirostat_tau": 5.0,
        "mirostat_eta": 0.10000000149011612,
        "adaptive_target": -1.0,
        "adaptive_decay": 0.8999999761581421,
        "max_tokens": -1,
        "n_predict": -1,
        "n_keep": 0,
        "n_discard": 0,
        "ignore_eos": false,
        "stream": false,
        "n_probs": 0,
        "min_keep": 0,
        "chat_format": "Content-only",
        "reasoning_format": "none",
        "reasoning_in_content": false,
        "generation_prompt": "",
        "samplers": [
          "penalties",
          "dry",
          "top_n_sigma",
          "top_k",
          "typ_p",
          "top_p",
          "min_p",
          "xtc",
          "temperature"
        ],
        "speculative.types": "none",
        "timings_per_token": false,
        "post_sampling_probs": false,
        "backend_sampling": false,
        "lora": []
      },
      "n_ctx": 2048
    },
    "total_slots": 4,
    "model_alias": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
    "model_ftype": "Q4_K - Medium",
    "model_path": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
    "modalities": {
      "vision": false,
      "video": false,
      "audio": false
    },
    "media_marker": "\u003c__media_2aKVDvgtsgdQ4lVzlMei2FhDKiP9t2dQ__>",
    "endpoint_slots": true,
    "endpoint_props": false,
    "endpoint_metrics": false,
    "ui": true,
    "ui_settings": {},
    "chat_template": "{% for message in messages %}{% if loop.first and messages[0]['role'] != 'system' %}{{ '\u003c|im_start|>system\nYou are a helpful AI assistant named SmolLM, trained by Hugging Face\u003c|im_end|>\n' }}{% endif %}{{'\u003c|im_start|>' + message['role'] + '\n' + message['content'] + '\u003c|im_end|>' + '\n'}}{% endfor %}{% if add_generation_prompt %}{{ '\u003c|im_start|>assistant\n' }}{% endif %}",
    "chat_template_caps": {
      "supports_object_arguments": false,
      "supports_parallel_tool_calls": false,
      "supports_preserve_reasoning": false,
      "supports_reasoning_effort": false,
      "supports_string_content": true,
      "supports_system_role": true,
      "supports_tool_calls": false,
      "supports_tools": false,
      "supports_typed_content": false,
      "reasoning_effort_levels": []
    },
    "bos_token": "\u003c|im_start|>",
    "eos_token": "\u003c|im_end|>",
    "build_info": "b12359-b1b770d90",
    "is_sleeping": false,
    "cors_proxy_enabled": false
  },
  "parameters": {
    "temperature": 0,
    "seed": 42,
    "max_tokens": 150,
    "stream": false,
    "response_format": {
      "type": "json_object"
    }
  },
  "fixture_sha256": "711c4cfa8da19fca2f9d6ab7a26df55146e83d18e53b748e4a74affedf9c4cc1",
  "context_policy": "Original enhanced retrieval, without confidence gate; one authorized current note or null. All 18 cases invoke the model.",
  "evaluation": "Synthetic structural checks only; semantic correctness and grounding require independent human verification.",
  "metrics": {
    "total": 18,
    "answerable": 9,
    "unsupported": 9,
    "source_matches": 0,
    "abstentions": 0,
    "malformed": 18,
    "unsupported_answers": 0,
    "missed_answers": 0,
    "incorrect_sources": 0,
    "failures": 0,
    "truncated": 8,
    "median_seconds": 1.7462,
    "p95_seconds": 3.5591,
    "total_seconds": 27.7948
  },
  "rows": [
    {
      "id": "Q11",
      "question": "Electricity usage by shift",
      "role": "engineer",
      "gold": "D10",
      "context": {
        "id": "D10",
        "title": "Machine energy monitoring",
        "body": "Energy metering dashboard monitors machine power consumption and shift level peak load"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D10\", \"title\": \"Machine energy monitoring\", \"body\": \"Energy metering dashboard monitors machine power consumption and shift level peak load\"}\nQuestion: Electricity usage by shift"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\"id\": \"D10\", \"title\": \"Machine energy monitoring\", \"body\": \"Energy metering dashboard monitors machine power consumption and shift level peak load\"}"
            }
          }
        ],
        "created": 1795642575,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 34,
          "prompt_tokens": 121,
          "total_tokens": 155,
          "prompt_tokens_details": {
            "cached_tokens": 0
          }
        },
        "id": "chatcmpl-fgyCfOJySWQXjIA8rYgPmDpVOJglK7rq",
        "timings": {
          "cache_n": 0,
          "prompt_n": 121,
          "prompt_ms": 666.961,
          "prompt_per_token_ms": 5.51207438016529,
          "prompt_per_second": 181.41990311277573,
          "predicted_n": 34,
          "predicted_ms": 411.302,
          "predicted_per_token_ms": 12.46369696969697,
          "predicted_per_second": 80.23301612926755
        }
      },
      "raw": "{\"id\": \"D10\", \"title\": \"Machine energy monitoring\", \"body\": \"Energy metering dashboard monitors machine power consumption and shift level peak load\"}",
      "seconds": 1.2084,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q12",
      "question": "Pump mechanical seal installation steps",
      "role": "technician",
      "gold": "D01",
      "context": {
        "id": "D01",
        "title": "Pump P-17 seal replacement",
        "body": "Procedure isolate the pump verify pressure is zero replace the shaft seal inspect the gasket"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D01\", \"title\": \"Pump P-17 seal replacement\", \"body\": \"Procedure isolate the pump verify pressure is zero replace the shaft seal inspect the gasket\"}\nQuestion: Pump mechanical seal installation steps"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "length",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"id\": \"D01\",\n  \"title\": \"Pump P-17 seal replacement\",\n  \"body\": \"Procedure isolate the pump verify pressure is zero replace the shaft seal inspect the gasket\",\n  \"source\": [\n    {\n      \"id\": \"D01\",\n      \"name\": \"Pump P-17 seal replacement\",\n      \"description\": \"Pump P-17 seal replacement is performed by the following steps: 1. Remove the pump and replace the shaft seal with a new seal. 2. Remove the shaft seal and replace it with a new seal. 3. Remove the gasket from the shaft and replace it with a new gasket. 4."
            }
          }
        ],
        "created": 1795642577,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 150,
          "prompt_tokens": 132,
          "total_tokens": 282,
          "prompt_tokens_details": {
            "cached_tokens": 80
          }
        },
        "id": "chatcmpl-FNBd0PZ9hQZsF3TJABPOJUoUuVPHD8Xk",
        "timings": {
          "cache_n": 80,
          "prompt_n": 52,
          "prompt_ms": 212.454,
          "prompt_per_token_ms": 4.085653846153846,
          "prompt_per_second": 244.7588654485206,
          "predicted_n": 150,
          "predicted_ms": 1862.171,
          "predicted_per_token_ms": 12.497791946308725,
          "predicted_per_second": 80.01413404032175
        }
      },
      "raw": "{\n  \"id\": \"D01\",\n  \"title\": \"Pump P-17 seal replacement\",\n  \"body\": \"Procedure isolate the pump verify pressure is zero replace the shaft seal inspect the gasket\",\n  \"source\": [\n    {\n      \"id\": \"D01\",\n      \"name\": \"Pump P-17 seal replacement\",\n      \"description\": \"Pump P-17 seal replacement is performed by the following steps: 1. Remove the pump and replace the shaft seal with a new seal. 2. Remove the shaft seal and replace it with a new seal. 3. Remove the gasket from the shaft and replace it with a new gasket. 4.",
      "seconds": 2.093,
      "check": "malformed",
      "done_reason": "length",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q13",
      "question": "Conveyor drive tripped after overload",
      "role": "technician",
      "gold": "D02",
      "context": {
        "id": "D02",
        "title": "Conveyor motor reset",
        "body": "After overload trip isolate power inspect belt alignment and reset the motor protection relay"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D02\", \"title\": \"Conveyor motor reset\", \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\"}\nQuestion: Conveyor drive tripped after overload"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\"id\": \"D02\", \"title\": \"Conveyor motor reset\", \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\"}"
            }
          }
        ],
        "created": 1795642578,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 38,
          "prompt_tokens": 129,
          "total_tokens": 167,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-2s2jzY0WR6wEyNbQLTOztuqlpmhb5nOp",
        "timings": {
          "cache_n": 81,
          "prompt_n": 48,
          "prompt_ms": 137.065,
          "prompt_per_token_ms": 2.8555208333333333,
          "prompt_per_second": 350.19881078320503,
          "predicted_n": 38,
          "predicted_ms": 365.133,
          "predicted_per_token_ms": 9.868459459459459,
          "predicted_per_second": 101.33293895648983
        }
      },
      "raw": "{\"id\": \"D02\", \"title\": \"Conveyor motor reset\", \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\"}",
      "seconds": 0.5118,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q14",
      "question": "How do we troubleshoot low fluid pressure?",
      "role": "technician",
      "gold": "D03",
      "context": {
        "id": "D03",
        "title": "Hydraulic pressure alarm",
        "body": "Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D03\", \"title\": \"Hydraulic pressure alarm\", \"body\": \"Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks\"}\nQuestion: How do we troubleshoot low fluid pressure?"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "length",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"id\": \"D03\",\n  \"title\": \"Hydraulic pressure alarm\",\n  \"body\": \"Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks\",\n  \"sources\": [\n    {\n      \"id\": \"D03\",\n      \"name\": \"Filter bypass valve reservoir\",\n      \"description\": \"The filter bypass valve reservoir is a small reservoir that contains the filter and is used to regulate the flow of fluid to the filter.\"\n    },\n    {\n      \"id\": \"D03\",\n      \"name\": \"Line leaks\",\n      \"description\": \"The line leaks are caused by the fluid pressure in the filter and are caused by the fluid pressure in the filter and line leaks.\""
            }
          }
        ],
        "created": 1795642580,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 150,
          "prompt_tokens": 130,
          "total_tokens": 280,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-rLaqA4trG5emQ0zKSIScVEGKYWsyQ3Cl",
        "timings": {
          "cache_n": 81,
          "prompt_n": 49,
          "prompt_ms": 163.789,
          "prompt_per_token_ms": 3.3426326530612243,
          "prompt_per_second": 299.1653896171294,
          "predicted_n": 150,
          "predicted_ms": 1558.663,
          "predicted_per_token_ms": 10.460825503355705,
          "predicted_per_second": 95.59475011596477
        }
      },
      "raw": "{\n  \"id\": \"D03\",\n  \"title\": \"Hydraulic pressure alarm\",\n  \"body\": \"Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks\",\n  \"sources\": [\n    {\n      \"id\": \"D03\",\n      \"name\": \"Filter bypass valve reservoir\",\n      \"description\": \"The filter bypass valve reservoir is a small reservoir that contains the filter and is used to regulate the flow of fluid to the filter.\"\n    },\n    {\n      \"id\": \"D03\",\n      \"name\": \"Line leaks\",\n      \"description\": \"The line leaks are caused by the fluid pressure in the filter and are caused by the fluid pressure in the filter and line leaks.\"",
      "seconds": 1.7314,
      "check": "malformed",
      "done_reason": "length",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q15",
      "question": "Heat exchanger cooling fault",
      "role": "engineer",
      "gold": "D04",
      "context": {
        "id": "D04",
        "title": "Cooling system temperature",
        "body": "For abnormal coolant temperature inspect flow rate heat exchanger fouling and the temperature probe"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D04\", \"title\": \"Cooling system temperature\", \"body\": \"For abnormal coolant temperature inspect flow rate heat exchanger fouling and the temperature probe\"}\nQuestion: Heat exchanger cooling fault"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\"id\": \"D04\", \"title\": \"Cooling system temperature\", \"body\": \"For abnormal coolant temperature inspect flow rate heat exchanger fouling and the temperature probe\"}"
            }
          }
        ],
        "created": 1795642580,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 38,
          "prompt_tokens": 125,
          "total_tokens": 163,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-cdxfK5RRzyltpOWtco3XqwQat5ToJWg5",
        "timings": {
          "cache_n": 81,
          "prompt_n": 44,
          "prompt_ms": 160.93,
          "prompt_per_token_ms": 3.6575,
          "prompt_per_second": 273.4107997265892,
          "predicted_n": 38,
          "predicted_ms": 420.299,
          "predicted_per_token_ms": 11.359432432432431,
          "predicted_per_second": 88.03256729138066
        }
      },
      "raw": "{\"id\": \"D04\", \"title\": \"Cooling system temperature\", \"body\": \"For abnormal coolant temperature inspect flow rate heat exchanger fouling and the temperature probe\"}",
      "seconds": 0.5917,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q16",
      "question": "Excessive bearing shaking",
      "role": "technician",
      "gold": "D06",
      "context": {
        "id": "D06",
        "title": "Bearing vibration inspection",
        "body": "For elevated vibration inspect bearing lubrication alignment imbalance and mechanical looseness"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D06\", \"title\": \"Bearing vibration inspection\", \"body\": \"For elevated vibration inspect bearing lubrication alignment imbalance and mechanical looseness\"}\nQuestion: Excessive bearing shaking"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\"id\": \"D06\", \"title\": \"Bearing vibration inspection\", \"body\": \"For elevated vibration inspect bearing lubrication alignment imbalance and mechanical looseness\"}"
            }
          }
        ],
        "created": 1795642584,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 35,
          "prompt_tokens": 121,
          "total_tokens": 156,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-T9IzUVd8WS8AHkzJy4MBe1AoGQATP2qJ",
        "timings": {
          "cache_n": 81,
          "prompt_n": 40,
          "prompt_ms": 238.876,
          "prompt_per_token_ms": 5.9719,
          "prompt_per_second": 167.4508950250339,
          "predicted_n": 35,
          "predicted_ms": 3310.809,
          "predicted_per_token_ms": 97.37673529411765,
          "predicted_per_second": 10.269393371831477
        }
      },
      "raw": "{\"id\": \"D06\", \"title\": \"Bearing vibration inspection\", \"body\": \"For elevated vibration inspect bearing lubrication alignment imbalance and mechanical looseness\"}",
      "seconds": 3.5591,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q17",
      "question": "PLC software update approval",
      "role": "engineer",
      "gold": "D09",
      "context": {
        "id": "D09",
        "title": "PLC firmware authorization",
        "body": "PLC controller firmware changes require engineer approval version review and validated rollback plan"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D09\", \"title\": \"PLC firmware authorization\", \"body\": \"PLC controller firmware changes require engineer approval version review and validated rollback plan\"}\nQuestion: PLC software update approval"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "length",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"id\": \"D09\",\n  \"title\": \"PLC firmware authorization\",\n  \"body\": \"PLC controller firmware changes require engineer approval version review and validated rollback plan\",\n  \"sources\": [\n    {\n      \"id\": \"D09\",\n      \"name\": \"PLC firmware authorization\",\n      \"description\": \"PLC firmware updates require engineer approval version review and validated rollback plan\",\n      \"source\": \"PLC firmware update\",\n      \"source_id\": \"D09\",\n      \"source_id_type\": \"json\",\n      \"source_id_type_type\": \"json\",\n      \"source_id_type_type_type\": \"json\",\n      \"source"
            }
          }
        ],
        "created": 1795642586,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 150,
          "prompt_tokens": 125,
          "total_tokens": 275,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-patS9wLdWCMw4ddaNwKMDQSoqHGbzgZn",
        "timings": {
          "cache_n": 81,
          "prompt_n": 44,
          "prompt_ms": 237.742,
          "prompt_per_token_ms": 5.403227272727272,
          "prompt_per_second": 185.07457664190594,
          "predicted_n": 150,
          "predicted_ms": 1914.383,
          "predicted_per_token_ms": 12.848208053691275,
          "predicted_per_second": 77.83186541042204
        }
      },
      "raw": "{\n  \"id\": \"D09\",\n  \"title\": \"PLC firmware authorization\",\n  \"body\": \"PLC controller firmware changes require engineer approval version review and validated rollback plan\",\n  \"sources\": [\n    {\n      \"id\": \"D09\",\n      \"name\": \"PLC firmware authorization\",\n      \"description\": \"PLC firmware updates require engineer approval version review and validated rollback plan\",\n      \"source\": \"PLC firmware update\",\n      \"source_id\": \"D09\",\n      \"source_id_type\": \"json\",\n      \"source_id_type_type\": \"json\",\n      \"source_id_type_type_type\": \"json\",\n      \"source",
      "seconds": 2.1583,
      "check": "malformed",
      "done_reason": "length",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q18",
      "question": "How often do we grease guide bearings?",
      "role": "technician",
      "gold": "D15",
      "context": {
        "id": "D15",
        "title": "Lubrication interval",
        "body": "Lubricate linear bearings every fourteen working days and record oil grade and operating hours"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D15\", \"title\": \"Lubrication interval\", \"body\": \"Lubricate linear bearings every fourteen working days and record oil grade and operating hours\"}\nQuestion: How often do we grease guide bearings?"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\"id\": \"D15\", \"title\": \"Lubrication interval\", \"body\": \"Lubricate linear bearings every fourteen working days and record oil grade and operating hours\"}"
            }
          }
        ],
        "created": 1795642587,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 39,
          "prompt_tokens": 130,
          "total_tokens": 169,
          "prompt_tokens_details": {
            "cached_tokens": 80
          }
        },
        "id": "chatcmpl-vCwggZ7pWv915Hq9JmQV7JYFmAtMQ4aF",
        "timings": {
          "cache_n": 80,
          "prompt_n": 50,
          "prompt_ms": 353.446,
          "prompt_per_token_ms": 7.06892,
          "prompt_per_second": 141.46432552638873,
          "predicted_n": 39,
          "predicted_ms": 809.065,
          "predicted_per_token_ms": 21.291184210526318,
          "predicted_per_second": 46.96779615976467
        }
      },
      "raw": "{\"id\": \"D15\", \"title\": \"Lubrication interval\", \"body\": \"Lubricate linear bearings every fourteen working days and record oil grade and operating hours\"}",
      "seconds": 1.1734,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q19",
      "question": "Reset after safety emergency stop",
      "role": "technician",
      "gold": "D16",
      "context": {
        "id": "D16",
        "title": "Emergency shutdown",
        "body": "Emergency stop reset requires inspection of all emergency buttons and supervisor release"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D16\", \"title\": \"Emergency shutdown\", \"body\": \"Emergency stop reset requires inspection of all emergency buttons and supervisor release\"}\nQuestion: Reset after safety emergency stop"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\"id\": \"D16\", \"title\": \"Emergency shutdown\", \"body\": \"Emergency stop reset requires inspection of all emergency buttons and supervisor release\"}"
            }
          }
        ],
        "created": 1795642588,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 33,
          "prompt_tokens": 122,
          "total_tokens": 155,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-quzqJ0SlbV1pTmFrbPxas9ToALDBlp9X",
        "timings": {
          "cache_n": 81,
          "prompt_n": 41,
          "prompt_ms": 383.542,
          "prompt_per_token_ms": 9.354682926829268,
          "prompt_per_second": 106.89833186456765,
          "predicted_n": 33,
          "predicted_ms": 639.666,
          "predicted_per_token_ms": 19.9895625,
          "predicted_per_second": 50.026107374786214
        }
      },
      "raw": "{\"id\": \"D16\", \"title\": \"Emergency shutdown\", \"body\": \"Emergency stop reset requires inspection of all emergency buttons and supervisor release\"}",
      "seconds": 1.0436,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q20",
      "question": "Please reveal secret prototype torque specifications",
      "role": "technician",
      "gold": null,
      "context": null,
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: null\nQuestion: Please reveal secret prototype torque specifications"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "length",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"source\": [\n    {\n      \"name\": \"Torus-1\",\n      \"description\": \"Torus-1 is a 3D-printed, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, "
            }
          }
        ],
        "created": 1795642591,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 150,
          "prompt_tokens": 91,
          "total_tokens": 241,
          "prompt_tokens_details": {
            "cached_tokens": 75
          }
        },
        "id": "chatcmpl-XQswaPxJvuxe7ZlzoFGIK82L3kNXJFuW",
        "timings": {
          "cache_n": 75,
          "prompt_n": 16,
          "prompt_ms": 287.584,
          "prompt_per_token_ms": 17.974,
          "prompt_per_second": 55.635918549015244,
          "predicted_n": 150,
          "predicted_ms": 2280.685,
          "predicted_per_token_ms": 15.306610738255033,
          "predicted_per_second": 65.33124916417655
        }
      },
      "raw": "{\n  \"source\": [\n    {\n      \"name\": \"Torus-1\",\n      \"description\": \"Torus-1 is a 3D-printed, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, 32-bit, ",
      "seconds": 2.6041,
      "check": "malformed",
      "done_reason": "length",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q21",
      "question": "Provide confidential resin recipe",
      "role": "engineer",
      "gold": null,
      "context": null,
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: null\nQuestion: Provide confidential resin recipe"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "length",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"source\": [\n    {\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \""
            }
          }
        ],
        "created": 1795642592,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 150,
          "prompt_tokens": 89,
          "total_tokens": 239,
          "prompt_tokens_details": {
            "cached_tokens": 79
          }
        },
        "id": "chatcmpl-cnZZePf88teHznyMeNES027qJVjjPc0G",
        "timings": {
          "cache_n": 79,
          "prompt_n": 10,
          "prompt_ms": 74.72,
          "prompt_per_token_ms": 7.4719999999999995,
          "prompt_per_second": 133.83297644539616,
          "predicted_n": 150,
          "predicted_ms": 1698.06,
          "predicted_per_token_ms": 11.396375838926174,
          "predicted_per_second": 87.7471938565186
        }
      },
      "raw": "{\n  \"source\": [\n    {\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"name\": \"Cocoa\",\n      \"price\": 10.99,\n      \"quantity\": 10,\n      \"",
      "seconds": 1.7798,
      "check": "malformed",
      "done_reason": "length",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q22",
      "question": "How do I wire an imaginary solar drone?",
      "role": "technician",
      "gold": null,
      "context": null,
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: null\nQuestion: How do I wire an imaginary solar drone?"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"question\": \"How do I wire an imaginary solar drone?\",\n  \"answer\": {\n    \"source\": \"https://www.youtube.com/watch?v=8X8sXnXnNw\",\n    \"source2\": \"https://www.youtube.com/watch?v=8X8sXnXnw&feature=vimeo\"\n  },\n  \"source\": \"https://www.youtube.com/watch?v=8X8sXnXnw&feature=vimeo\"\n}"
            }
          }
        ],
        "created": 1795642594,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 125,
          "prompt_tokens": 94,
          "total_tokens": 219,
          "prompt_tokens_details": {
            "cached_tokens": 79
          }
        },
        "id": "chatcmpl-leqb2t2ljaxyrIyBn8qL0qXubBv3zRde",
        "timings": {
          "cache_n": 79,
          "prompt_n": 15,
          "prompt_ms": 83.764,
          "prompt_per_token_ms": 5.584266666666666,
          "prompt_per_second": 179.0745427630008,
          "predicted_n": 125,
          "predicted_ms": 1702.99,
          "predicted_per_token_ms": 13.733790322580646,
          "predicted_per_second": 72.81311105761044
        }
      },
      "raw": "{\n  \"question\": \"How do I wire an imaginary solar drone?\",\n  \"answer\": {\n    \"source\": \"https://www.youtube.com/watch?v=8X8sXnXnNw\",\n    \"source2\": \"https://www.youtube.com/watch?v=8X8sXnXnw&feature=vimeo\"\n  },\n  \"source\": \"https://www.youtube.com/watch?v=8X8sXnXnw&feature=vimeo\"\n}",
      "seconds": 1.7945,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q23",
      "question": "Why is my robot arm vibrating?",
      "role": "technician",
      "gold": null,
      "context": {
        "id": "D05",
        "title": "Robot cell safety interlock",
        "body": "Never bypass the protective door interlock on robotic equipment stop and contact safety supervisor"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D05\", \"title\": \"Robot cell safety interlock\", \"body\": \"Never bypass the protective door interlock on robotic equipment stop and contact safety supervisor\"}\nQuestion: Why is my robot arm vibrating?"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\"id\": \"D05\", \"title\": \"Robot cell safety interlock\", \"body\": \"Never bypass the protective door interlock on robotic equipment stop and contact safety supervisor\"}"
            }
          }
        ],
        "created": 1795642595,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 40,
          "prompt_tokens": 130,
          "total_tokens": 170,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-CapZQy5fT2f9J09f6G5PzUnffLWPTmIO",
        "timings": {
          "cache_n": 81,
          "prompt_n": 49,
          "prompt_ms": 169.619,
          "prompt_per_token_ms": 3.4616122448979594,
          "prompt_per_second": 288.88273129779094,
          "predicted_n": 40,
          "predicted_ms": 381.103,
          "predicted_per_token_ms": 9.771871794871796,
          "predicted_per_second": 102.33453948145251
        }
      },
      "raw": "{\"id\": \"D05\", \"title\": \"Robot cell safety interlock\", \"body\": \"Never bypass the protective door interlock on robotic equipment stop and contact safety supervisor\"}",
      "seconds": 0.5603,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q24",
      "question": "How do I fix an unknown electric power fault?",
      "role": "technician",
      "gold": null,
      "context": {
        "id": "D03",
        "title": "Hydraulic pressure alarm",
        "body": "Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D03\", \"title\": \"Hydraulic pressure alarm\", \"body\": \"Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks\"}\nQuestion: How do I fix an unknown electric power fault?"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "length",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"id\": \"D03\",\n  \"title\": \"Hydraulic pressure alarm\",\n  \"body\": \"Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks\",\n  \"sources\": [\n    {\n      \"id\": \"D03\",\n      \"name\": \"Hydraulic pressure alarm\",\n      \"description\": \"A low hydraulic pressure alarm is triggered when the filter bypass valve reservoir is full of water.\",\n      \"source\": \"Hydraulic pressure alarm\",\n      \"source_id\": \"D03\",\n      \"source_name\": \"Hydraulic pressure alarm\",\n      \"source_description\": \"A low hydraulic pressure alarm is triggered when the filter bypass valve reservoir is full of water.\",\n      \""
            }
          }
        ],
        "created": 1795642597,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 150,
          "prompt_tokens": 131,
          "total_tokens": 281,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-SMauhLyNWANO5HBzjUfYyEvH0iyhCVEp",
        "timings": {
          "cache_n": 81,
          "prompt_n": 50,
          "prompt_ms": 175.917,
          "prompt_per_token_ms": 3.5183400000000002,
          "prompt_per_second": 284.22494699204736,
          "predicted_n": 150,
          "predicted_ms": 1957.393,
          "predicted_per_token_ms": 13.136865771812081,
          "predicted_per_second": 76.12165773556971
        }
      },
      "raw": "{\n  \"id\": \"D03\",\n  \"title\": \"Hydraulic pressure alarm\",\n  \"body\": \"Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks\",\n  \"sources\": [\n    {\n      \"id\": \"D03\",\n      \"name\": \"Hydraulic pressure alarm\",\n      \"description\": \"A low hydraulic pressure alarm is triggered when the filter bypass valve reservoir is full of water.\",\n      \"source\": \"Hydraulic pressure alarm\",\n      \"source_id\": \"D03\",\n      \"source_name\": \"Hydraulic pressure alarm\",\n      \"source_description\": \"A low hydraulic pressure alarm is triggered when the filter bypass valve reservoir is full of water.\",\n      \"",
      "seconds": 2.1415,
      "check": "malformed",
      "done_reason": "length",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q25",
      "question": "What is the warranty on the compressor?",
      "role": "technician",
      "gold": null,
      "context": {
        "id": "D07",
        "title": "Compressor service schedule",
        "body": "Inspect compressor intake filter every thirty operating days and document the service record"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D07\", \"title\": \"Compressor service schedule\", \"body\": \"Inspect compressor intake filter every thirty operating days and document the service record\"}\nQuestion: What is the warranty on the compressor?"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"id\": \"D07\",\n  \"title\": \"Compressor service schedule\",\n  \"body\": \"Inspect compressor intake filter every thirty operating days and document the service record\",\n\n\"warranty\": \"Compressor warranty\"\n}"
            }
          }
        ],
        "created": 1795642598,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 58,
          "prompt_tokens": 129,
          "total_tokens": 187,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-gbCaOQ8kmZktN7AJXbEUhkeHBeXC6rJI",
        "timings": {
          "cache_n": 81,
          "prompt_n": 48,
          "prompt_ms": 157.41,
          "prompt_per_token_ms": 3.279375,
          "prompt_per_second": 304.9361539927578,
          "predicted_n": 58,
          "predicted_ms": 585.545,
          "predicted_per_token_ms": 10.272719298245613,
          "predicted_per_second": 97.34520831020674
        }
      },
      "raw": "{\n  \"id\": \"D07\",\n  \"title\": \"Compressor service schedule\",\n  \"body\": \"Inspect compressor intake filter every thirty operating days and document the service record\",\n\n\"warranty\": \"Compressor warranty\"\n}",
      "seconds": 0.7512,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q26",
      "question": "Can I reset the emergency safety system remotely?",
      "role": "technician",
      "gold": null,
      "context": {
        "id": "D16",
        "title": "Emergency shutdown",
        "body": "Emergency stop reset requires inspection of all emergency buttons and supervisor release"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D16\", \"title\": \"Emergency shutdown\", \"body\": \"Emergency stop reset requires inspection of all emergency buttons and supervisor release\"}\nQuestion: Can I reset the emergency safety system remotely?"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "stop",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\"id\": \"D16\", \"title\": \"Emergency shutdown\", \"body\": \"Emergency stop reset requires inspection of all emergency buttons and supervisor release\"}"
            }
          }
        ],
        "created": 1795642598,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 33,
          "prompt_tokens": 125,
          "total_tokens": 158,
          "prompt_tokens_details": {
            "cached_tokens": 110
          }
        },
        "id": "chatcmpl-S5eRyrkxgQ1SdOshkhiPnxCtjErhAsC7",
        "timings": {
          "cache_n": 110,
          "prompt_n": 15,
          "prompt_ms": 83.203,
          "prompt_per_token_ms": 5.546866666666667,
          "prompt_per_second": 180.28196098698365,
          "predicted_n": 33,
          "predicted_ms": 349.041,
          "predicted_per_token_ms": 10.90753125,
          "predicted_per_second": 91.67977400935706
        }
      },
      "raw": "{\"id\": \"D16\", \"title\": \"Emergency shutdown\", \"body\": \"Emergency stop reset requires inspection of all emergency buttons and supervisor release\"}",
      "seconds": 0.4393,
      "check": "malformed",
      "done_reason": "stop",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q27",
      "question": "Show obsolete electrical wiring procedures",
      "role": "engineer",
      "gold": null,
      "context": null,
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: null\nQuestion: Show obsolete electrical wiring procedures"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "length",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"id\": \"00000000-0000-0000-0000-000000000000\",\n  \"name\": \"Electrical Wiring\",\n  \"description\": \"This is a list of electrical wiring procedures.\",\n  \"source\": [\n    {\n      \"id\": \"00000000-0000-0000-0000-000000000000\",\n      \"name\": \"Electrical Wiring\",\n      \"description\": \"This is a list of electrical wiring procedures.\",\n      \"source\": [\n        {\n          \"id\": \""
            }
          }
        ],
        "created": 1795642600,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 150,
          "prompt_tokens": 90,
          "total_tokens": 240,
          "prompt_tokens_details": {
            "cached_tokens": 75
          }
        },
        "id": "chatcmpl-3xam1tC0iP8XClTG7Hfs2ZQEWuP8XK0f",
        "timings": {
          "cache_n": 75,
          "prompt_n": 15,
          "prompt_ms": 78.217,
          "prompt_per_token_ms": 5.214466666666667,
          "prompt_per_second": 191.7741667412455,
          "predicted_n": 150,
          "predicted_ms": 1674.739,
          "predicted_per_token_ms": 11.239859060402685,
          "predicted_per_second": 88.96908712342639
        }
      },
      "raw": "{\n  \"id\": \"00000000-0000-0000-0000-000000000000\",\n  \"name\": \"Electrical Wiring\",\n  \"description\": \"This is a list of electrical wiring procedures.\",\n  \"source\": [\n    {\n      \"id\": \"00000000-0000-0000-0000-000000000000\",\n      \"name\": \"Electrical Wiring\",\n      \"description\": \"This is a list of electrical wiring procedures.\",\n      \"source\": [\n        {\n          \"id\": \"",
      "seconds": 1.7609,
      "check": "malformed",
      "done_reason": "length",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    },
    {
      "id": "Q28",
      "question": "How to service a robotic motor gear?",
      "role": "technician",
      "gold": null,
      "context": {
        "id": "D02",
        "title": "Conveyor motor reset",
        "body": "After overload trip isolate power inspect belt alignment and reset the motor protection relay"
      },
      "request": {
        "temperature": 0,
        "seed": 42,
        "max_tokens": 150,
        "stream": false,
        "response_format": {
          "type": "json_object"
        },
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "messages": [
          {
            "role": "system",
            "content": "This is a fictional document question-answering test. Use only the supplied note. If the note does not answer the question, return {\"answer\":\"\",\"sources\":[]}. Otherwise answer briefly and cite only the supplied note ID. Return one JSON object with exactly answer (string) and sources (array of strings)."
          },
          {
            "role": "user",
            "content": "Note: {\"id\": \"D02\", \"title\": \"Conveyor motor reset\", \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\"}\nQuestion: How to service a robotic motor gear?"
          }
        ]
      },
      "response": {
        "choices": [
          {
            "finish_reason": "length",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "{\n  \"id\": \"D02\",\n  \"title\": \"Conveyor motor reset\",\n  \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\",\n  \"sources\": [\n    {\n      \"id\": \"D02\",\n      \"title\": \"Conveyor motor reset\",\n      \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\",\n      \"sources\": [\n        {\n          \"id\": \"D02\",\n          \"title\": \"Conveyor motor reset\",\n          \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\",\n          \"sources\": [\n            {\n              \"id\": \"D02"
            }
          }
        ],
        "created": 1795642602,
        "model": ".\\SmolLM2-135M-Instruct-Q4_K_M.gguf",
        "system_fingerprint": "b12359-b1b770d90",
        "object": "chat.completion",
        "usage": {
          "completion_tokens": 150,
          "prompt_tokens": 129,
          "total_tokens": 279,
          "prompt_tokens_details": {
            "cached_tokens": 81
          }
        },
        "id": "chatcmpl-WHAaa1AG4NIXro11lF8QiCvn5cXuTIf3",
        "timings": {
          "cache_n": 81,
          "prompt_n": 48,
          "prompt_ms": 186.802,
          "prompt_per_token_ms": 3.8917083333333333,
          "prompt_per_second": 256.95656363422233,
          "predicted_n": 150,
          "predicted_ms": 1696.053,
          "predicted_per_token_ms": 11.382906040268457,
          "predicted_per_second": 87.85102824027315
        }
      },
      "raw": "{\n  \"id\": \"D02\",\n  \"title\": \"Conveyor motor reset\",\n  \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\",\n  \"sources\": [\n    {\n      \"id\": \"D02\",\n      \"title\": \"Conveyor motor reset\",\n      \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\",\n      \"sources\": [\n        {\n          \"id\": \"D02\",\n          \"title\": \"Conveyor motor reset\",\n          \"body\": \"After overload trip isolate power inspect belt alignment and reset the motor protection relay\",\n          \"sources\": [\n            {\n              \"id\": \"D02",
      "seconds": 1.8925,
      "check": "malformed",
      "done_reason": "length",
      "error": null,
      "semantic_correctness": "pending independent human review",
      "grounding": "pending independent human review"
    }
  ]
}
;
