import json
import os

base_path = '/home/junior/Desktop/RECEIPTERS/landing page/receipters-website'
en_path = os.path.join(base_path, 'public/locales/en/common.json')
i18n_path = os.path.join(base_path, 'i18n.ts')

with open(en_path, 'r') as f:
    en_data = json.load(f)

en_json_str = json.dumps(en_data, indent=2, ensure_ascii=False)

with open(i18n_path, 'r') as f:
    lines = f.readlines()

start_line = -1
end_line = -1

for i, line in enumerate(lines):
    if 'const enTranslations =' in line:
        start_line = i
    if start_line != -1 and line.strip() == '};' and i > start_line:
        if i + 1 < len(lines) and ('i18n' in lines[i+1] or lines[i+1].strip() == ''):
            end_line = i
            break

if start_line != -1 and end_line != -1:
    new_content = lines[:start_line]
    new_content.append(f"const enTranslations = {en_json_str};\n")
    new_content.extend(lines[end_line+1:])
    
    with open(i18n_path, 'w') as f:
        f.writelines(new_content)
    print("Updated i18n.ts")
else:
    print(f"Could not find enTranslations block: start={start_line}, end={end_line}")
