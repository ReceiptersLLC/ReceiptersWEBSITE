import json
import os

def get_keys(data, prefix=''):
    keys = set()
    for k, v in data.items():
        if isinstance(v, dict):
            keys.update(get_keys(v, prefix + k + '.'))
        else:
            keys.add(prefix + k)
    return keys

base_path = '/home/junior/Desktop/RECEIPTERS/landing page/receipters-website/public/locales'
en_data = json.load(open(os.path.join(base_path, 'en/common.json')))
en_keys = get_keys(en_data)

for lng in ['fr', 'sw', 'de']:
    lng_path = os.path.join(base_path, lng, 'common.json')
    if os.path.exists(lng_path):
        lng_data = json.load(open(lng_path))
        lng_keys = get_keys(lng_data)
        missing = en_keys - lng_keys
        extra = lng_keys - en_keys
        print(f"--- {lng} ---")
        if missing:
            print(f"Missing keys ({len(missing)}):")
            for k in sorted(missing):
                print(f"  {k}")
        if extra:
            print(f"Extra keys ({len(extra)}):")
            for k in sorted(extra):
                print(f"  {k}")
