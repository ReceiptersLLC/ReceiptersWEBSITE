import json
import os

base_path = '/home/junior/Desktop/RECEIPTERS/landing page/receipters-website/public/locales'
en_path = os.path.join(base_path, 'en/common.json')

with open(en_path, 'r') as f:
    en_data = json.load(f)

for lng in ['fr', 'sw', 'de']:
    lng_path = os.path.join(base_path, lng, 'common.json')
    if not os.path.exists(lng_path):
        continue
        
    with open(lng_path, 'r') as f:
        lng_data = json.load(f)
            
    # Sync: keep all keys from EN, use LNG value if available
    synced_data = {}
    for k, v in en_data.items():
        if k in lng_data:
            synced_data[k] = lng_data[k]
        else:
            synced_data[k] = v # Fallback to English
            
    with open(lng_path, 'w') as f:
        json.dump(synced_data, f, indent=2, ensure_ascii=False)
    print(f"Synced {lng}")
