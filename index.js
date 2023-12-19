
const axios = require("axios");
const path = require("path");
const fs = require("fs");




async function downloadAndSaveAudio(text) {

    //check if text is bigger than 333
    if(text.trim() && text.trim().length > 333){

        console.log(
            'text provided is bigger than allowed length for free front Page demo. text should not be more than 333 (half-evil) characters in length'
        );

        //do next google tts way
        return;
    }



    let voice_names = // api https://api.elevenlabs.io/v1/voices

    {
        "voices": [
          {
            "voice_id": "21m00Tcm4TlvDq8ikWAM",
            "name": "Rachel",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "calm",
              "age": "young",
              "gender": "female",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/21m00Tcm4TlvDq8ikWAM/df6788f9-5c96-470d-8312-aab3b3d8f50a.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
  
 
          {
            "voice_id": "CYw3kZ02Hs0563khs1Fj",
            "name": "Dave",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "british-essex",
              "description": "conversational",
              "age": "young",
              "gender": "male",
              "use case": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/CYw3kZ02Hs0563khs1Fj/872cb056-45d3-419e-b5c6-de2b387a93a0.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "D38z5RcWu1voky8WS1ja",
            "name": "Fin",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "irish",
              "description": "sailor",
              "age": "old",
              "gender": "male",
              "use case": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/D38z5RcWu1voky8WS1ja/a470ba64-1e72-46d9-ba9d-030c4155e2d2.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "EXAVITQu4vr4xnSDxMaL",
            "name": "Sarah",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "soft",
              "age": "young",
              "gender": "female",
              "use case": "news"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/EXAVITQu4vr4xnSDxMaL/6851ec91-9950-471f-8586-357c52539069.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "ErXwobaYiN019PkySvjV",
            "name": "Antoni",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "well-rounded",
              "age": "young",
              "gender": "male",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ErXwobaYiN019PkySvjV/ee9ac367-91ee-4a56-818a-2bd1a9dbe83a.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "GBv7mTt0atIp3Br8iCZE",
            "name": "Thomas",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "calm",
              "age": "young",
              "gender": "male",
              "use case": "meditation"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/GBv7mTt0atIp3Br8iCZE/98542988-5267-4148-9a9e-baa8c4f14644.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "IKne3meq5aSn9XLyUdCD",
            "name": "Charlie",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "australian",
              "description": "casual",
              "age": "middle aged",
              "gender": "male",
              "use case": "conversational"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/IKne3meq5aSn9XLyUdCD/102de6f2-22ed-43e0-a1f1-111fa75c5481.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "JBFqnCBsd6RMkjVDRZzb",
            "name": "George",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "british",
              "description": "raspy",
              "age": "middle aged",
              "gender": "male",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/JBFqnCBsd6RMkjVDRZzb/365e8ae8-5364-4b07-9a3b-1bfb4a390248.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "LcfcDJNUP1GQjkzn1xUU",
            "name": "Emily",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "calm",
              "age": "young",
              "gender": "female",
              "use case": "meditation"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/LcfcDJNUP1GQjkzn1xUU/e4b994b7-9713-4238-84f3-add8fccaaccd.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "MF3mGyEYCl7XYWbV9V6O",
            "name": "Elli",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "emotional",
              "age": "young",
              "gender": "female",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/MF3mGyEYCl7XYWbV9V6O/d8ecadea-9e48-4e5d-868a-2ec3d7397861.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "N2lVS1w4EtoT3dr4eOWO",
            "name": "Callum",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "hoarse",
              "age": "middle aged",
              "gender": "male",
              "use case": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/N2lVS1w4EtoT3dr4eOWO/ac833bd8-ffda-4938-9ebc-b0f99ca25481.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "ODq5zmih8GrVes37Dizd",
            "name": "Patrick",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "shouty",
              "age": "middle aged",
              "gender": "male",
              "use case": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ODq5zmih8GrVes37Dizd/0ebec87a-2569-4976-9ea5-0170854411a9.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "SOYHLrjzK2X1ezoPC6cr",
            "name": "Harry",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "anxious",
              "age": "young",
              "gender": "male",
              "use case": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/SOYHLrjzK2X1ezoPC6cr/86d178f6-f4b6-4e0e-85be-3de19f490794.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "TX3LPaxmHKxFdv7VOQHJ",
            "name": "Liam",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "age": "young",
              "gender": "male",
              "use case": "narration",
              "description ": "neutral"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/TX3LPaxmHKxFdv7VOQHJ/63148076-6363-42db-aea8-31424308b92c.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "ThT5KcBeYPX3keUQqHPh",
            "name": "Dorothy",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "british",
              "description": "pleasant",
              "age": "young",
              "gender": "female",
              "use case": "children's stories"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ThT5KcBeYPX3keUQqHPh/981f0855-6598-48d2-9f8f-b6d92fbbe3fc.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "TxGEqnHWrfWFTfGW9XjX",
            "name": "Josh",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "deep",
              "age": "young",
              "gender": "male",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/TxGEqnHWrfWFTfGW9XjX/3ae2fc71-d5f9-4769-bb71-2a43633cd186.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "VR6AewLTigWG4xSOukaG",
            "name": "Arnold",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "crisp",
              "age": "middle aged",
              "gender": "male",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/VR6AewLTigWG4xSOukaG/316050b7-c4e0-48de-acf9-a882bb7fc43b.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "XB0fDUnXU5powFXDhCwa",
            "name": "Charlotte",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "english-swedish",
              "description": "seductive",
              "age": "middle aged",
              "gender": "female",
              "use case": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/XB0fDUnXU5powFXDhCwa/942356dc-f10d-4d89-bda5-4f8505ee038b.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "XrExE9yKIg1WjnnlVkGX",
            "name": "Matilda",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "warm",
              "age": "young",
              "gender": "female",
              "use case": "audiobook"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/XrExE9yKIg1WjnnlVkGX/b930e18d-6b4d-466e-bab2-0ae97c6d8535.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "Yko7PKHZNXotIFUBG7I9",
            "name": "Matthew",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "british",
              "age": "middle aged",
              "gender": "male",
              "use case": "audiobook",
              "description ": "calm"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/Yko7PKHZNXotIFUBG7I9/02c66c93-a237-436f-8a7d-43e8c49bc6a3.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "ZQe5CZNOzWyzPSCn5a3c",
            "name": "James",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "australian",
              "description": "calm ",
              "age": "old",
              "gender": "male",
              "use case": "news"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ZQe5CZNOzWyzPSCn5a3c/35734112-7b72-48df-bc2f-64d5ab2f791b.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "Zlb1dXrM653N07WRdFW3",
            "name": "Joseph",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "british",
              "age": "middle aged",
              "gender": "male",
              "use case": "news",
              "description ": "ground reporter "
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/Zlb1dXrM653N07WRdFW3/daa22039-8b09-4c65-b59f-c79c48646a72.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "bVMeCyTHy58xNoL34h3p",
            "name": "Jeremy",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american-irish",
              "description": "excited",
              "age": "young",
              "gender": "male",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/bVMeCyTHy58xNoL34h3p/66c47d58-26fd-4b30-8a06-07952116a72c.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "flq6f7yk4E4fJM5XTYuZ",
            "name": "Michael",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "age": "old",
              "gender": "male",
              "use case": "audiobook",
              "description ": "orotund"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/flq6f7yk4E4fJM5XTYuZ/c6431a82-f7d2-4905-b8a4-a631960633d6.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "g5CIjZEefAph4nQFvHAz",
            "name": "Ethan",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "age": "young",
              "gender": "male",
              "use case": "ASMR",
              "description ": "whisper"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/g5CIjZEefAph4nQFvHAz/26acfa99-fdec-43b8-b2ee-e49e75a3ac16.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "jBpfuIE2acCO8z3wKNLl",
            "name": "Gigi",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "childlish",
              "age": "young",
              "gender": "female",
              "use case": "animation"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/jBpfuIE2acCO8z3wKNLl/3a7e4339-78fa-404e-8d10-c3ef5587935b.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "jsCqWAovK2LkecY7zXl4",
            "name": "Freya",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "age": "young",
              "gender": "female",
              "description ": "overhyped",
              "usecase": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/jsCqWAovK2LkecY7zXl4/8e1f5240-556e-4fd5-892c-25df9ea3b593.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "knrPHWnBmmDHMoiMeP3l",
            "name": "🎅 Santa Claus",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "age": "old",
              "gender": "male",
              "use case": "christmas"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/knrPHWnBmmDHMoiMeP3l/6b454051-3ec2-4a6d-aa2f-1bda2d8c93ea.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "oWAxZDx7w5VEj9dCyTzz",
            "name": "Grace",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american-southern",
              "age": "young",
              "gender": "female",
              "use case": "audiobook ",
              "description ": "gentle"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/oWAxZDx7w5VEj9dCyTzz/84a36d1c-e182-41a8-8c55-dbdd15cd6e72.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "onwK4e9ZLuTAKqWW03F9",
            "name": "Daniel",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "british",
              "description": "deep",
              "age": "middle aged",
              "gender": "male",
              "use case": "news presenter"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/onwK4e9ZLuTAKqWW03F9/7eee0236-1a72-4b86-b303-5dcadc007ba9.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "pFZP5JQG7iQjIQuC4Bku",
            "name": "Lily",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "british",
              "description": "raspy",
              "age": "middle aged",
              "gender": "female",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pFZP5JQG7iQjIQuC4Bku/0ab8bd74-fcd2-489d-b70a-3e1bcde8c999.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "pMsXgVXv3BLzUgSXRplE",
            "name": "Serena",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "pleasant",
              "age": "middle aged",
              "gender": "female",
              "use case": "interactive"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pMsXgVXv3BLzUgSXRplE/d61f18ed-e5b0-4d0b-a33c-5c6e7e33b053.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "pNInz6obpgDQGcFmaJgB",
            "name": "Adam",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "deep",
              "age": "middle aged",
              "gender": "male",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pNInz6obpgDQGcFmaJgB/38a69695-2ca9-4b9e-b9ec-f07ced494a58.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "piTKgcLEGmPE4e6mEKli",
            "name": "Nicole",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "whisper",
              "age": "young",
              "gender": "female",
              "use case": "audiobook"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/piTKgcLEGmPE4e6mEKli/c269a54a-e2bc-44d0-bb46-4ed2666d6340.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "pqHfZKP75CvOlQylNhV4",
            "name": "Bill",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "strong",
              "age": "middle aged",
              "gender": "male",
              "use case": "documentary"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pqHfZKP75CvOlQylNhV4/52f0842a-cf81-4715-8cf0-76cfbd77088e.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "t0jbNlBVZ17f02VDIeMI",
            "name": "Jessie",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "raspy ",
              "age": "old",
              "gender": "male",
              "use case": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/t0jbNlBVZ17f02VDIeMI/e26939e3-61a4-4872-a41d-33922cfbdcdc.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "yoZ06aMxZJJ28mfd3POQ",
            "name": "Sam",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "raspy",
              "age": "young",
              "gender": "male",
              "use case": "narration"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/yoZ06aMxZJJ28mfd3POQ/ac9d1c91-92ce-4b20-8cc2-3187a7da49ec.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [ ]
          },
          {
            "voice_id": "z9fAnlkpzviPz146aGWa",
            "name": "Glinda",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "american",
              "description": "witch",
              "age": "middle aged",
              "gender": "female",
              "use case": "video games"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/z9fAnlkpzviPz146aGWa/cbc60443-7b61-4ebb-b8e1-5c03237ea01d.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "zcAOhNBS3c14rBihAFp1",
            "name": "Giovanni",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "english-italian",
              "description": "foreigner",
              "age": "young",
              "gender": "male",
              "use case": "audiobook"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/zcAOhNBS3c14rBihAFp1/e7410f8f-4913-4cb8-8907-784abee5aff8.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          },
          {
            "voice_id": "zrHiDhphv9ZnVXBqCLjz",
            "name": "Mimi",
            "samples": null,
            "category": "premade",
            "fine_tuning": {
              "language": null,
              "is_allowed_to_fine_tune": false,
              "fine_tuning_requested": false,
              "finetuning_state": "not_started",
              "verification_attempts": null,
              "verification_failures": [ ],
              "verification_attempts_count": 0,
              "slice_ids": null,
              "manual_verification": null,
              "manual_verification_requested": false
            },
            "labels": {
              "accent": "english-swedish",
              "description": "childish",
              "age": "young",
              "gender": "female",
              "use case": "animation"
            },
            "description": null,
            "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/zrHiDhphv9ZnVXBqCLjz/decbf20b-0f57-4fac-985b-a4f0290ebfc4.mp3",
            "available_for_tiers": [ ],
            "settings": null,
            "sharing": null,
            "high_quality_base_model_ids": [
              "eleven_multilingual_v1"
            ]
          }
        ]
      }

    


    try {

        let voice_array_index = 0;//position of voice in array [ voice_names[] ]
        let voice_id = voice_names.voices[voice_array_index].voice_id; //voice id

        //voice options
        let voice_option =   {
            "text":text.trim(),
            // "model_id":"eleven_multilingual_v2"
        }

        //check if voice has mode_id
        if(voice_names.voices[voice_array_index].high_quality_base_model_ids && voice_names.voices[voice_array_index].high_quality_base_model_ids.length > 0){

            //choose first voice id
            voice_option.model_id = voice_names.voices[voice_array_index].high_quality_base_model_ids[0]
        }


        // console.log(voice_option,'https://api.elevenlabs.io/v1/text-to-speech/'+voice_id+'/stream')

        //http request
        const response = await axios({
            method: 'post',
            url: 'https://api.elevenlabs.io/v1/text-to-speech/'+voice_id+'/stream',
            responseType: 'stream', 
            data: voice_option
        })

        // Generate a unique name for the image using the current date and time
        const currentDate = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];

        const audio_name = path.join(__dirname ,`audio_${currentDate}.mpga`);

        // Create a write stream to save the image
        const writer = fs.createWriteStream(audio_name);

        // Pipe the response stream to the write stream
        response.data.pipe(writer);

        // Return a promise to await the completion of writing
        return new Promise((resolve, reject) => {

            writer.on('finish', resolve(audio_name));
            writer.on('error', reject(response));

        });

    } catch (error) {
        console.error('Error 1, tts elevenabs.io Audio downloading or saving : ', error.message);
        console.log("Could be that you have exceeded quota for front page usage, goto [ https://elevenlabs.io/ ] en try to enter text in the demo box then press play.")
        
    }

}


// Call the function with the image URL
downloadAndSaveAudio(
    "Amidst the twilight's hush, anopheles takes flight,\nBringing whispers of fever in the stillness of night,\nLike shadows in the moon's gentle embrace,\nTheir silent hum carries a haunting trace."
)

.then((audio_name) => {

    if(audio_name){

        console.log('tts elevenabs.io Audio downloaded and saved successfully : ',audio_name);
    }
})

.catch((error) =>{
 
    console.error('Error 2, tts elevenabs.io Audio downloading or saving : ', error.message);
    // console.error(error)
    console.log("Could be that you have exceeded quota for front page usage, goto [ https://elevenlabs.io/ ] en try to enter text in the demo box then press play.")
        

});