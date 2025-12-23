import json
import os

base_path = '/home/junior/Desktop/RECEIPTERS/landing page/receipters-website/public/locales'
en_path = os.path.join(base_path, 'en/common.json')

with open(en_path, 'r') as f:
    en_data = json.load(f)

translations = {
    "fr": {
        "product.closing.title": "Commencez là où vous en êtes. Évoluez au fur et à mesure.",
        "product.closing.subtitle": "Avec Receipters, vous n'avez pas à tout faire le premier jour. Vous pouvez :",
        "product.closing.step1": "Commencez par la facturation numérique pour moderniser votre passage en caisse et nettoyer vos données.",
        "product.closing.step2": "Ajoutez le stockage des reçus pour centraliser et sécuriser votre historique de transactions.",
        "product.closing.step3": "Déployez l'application Receipters pour mettre les reçus entre les mains du personnel et des clients.",
        "product.closing.step4": "Activez l'analyse des données lorsque vous êtes prêt à transformer les reçus en un atout stratégique.",
        "product.closing.comparePlans": "Comparer les forfaits",
        "product.closing.talkToTeam": "Parler à notre équipe",
        "product.closing.button1": "Comparer les forfaits",
        "product.closing.button2": "Parler à notre équipe",
        "contact.details.title": "Informations de contact",
        "contact.details.primaryOffice": "Emplacement du bureau principal",
        "contact.details.otherOffices": "Autres emplacements de bureaux",
        "contact.details.reachUs": "Nous joindre",
        "contact.details.phoneUS": "Téléphone (US) :",
        "contact.details.phoneZambia": "Téléphone (Zambie) :",
        "contact.details.whatsapp": "Whatsapp :",
        "contact.details.email": "E-mail :",
        "contact.details.usOffice": "États-Unis (Newark, NJ)",
        "contact.details.zambiaOffice": "Zambie (Lusaka)"
    },
    "sw": {
        "product.closing.title": "Anza Pale Ulipo. Kua Unapoendelea.",
        "product.closing.subtitle": "Ukiwa na Receipters, si lazima ufanye kila kitu siku ya kwanza. Unaweza:",
        "product.closing.step1": "Anza na Utoaji wa Risiti za Kidijitali ili kuboresha malipo yako na kusafisha data zako.",
        "product.closing.step2": "Ongeza Hifadhi ya Risiti ili kuweka pamoja na kulinda historia yako ya miamala.",
        "product.closing.step3": "Tumia Programu ya Receipters ili kuweka risiti mikononi mwa wafanyakazi na wateja.",
        "product.closing.step4": "Washa Uchambuzi wa Data unapokuwa tayari kugeuza risiti kuwa rasilimali ya kimkakati.",
        "product.closing.comparePlans": "Linganisha Mipango",
        "product.closing.talkToTeam": "Zungumza na Timu Yetu",
        "product.closing.button1": "Linganisha Mipango",
        "product.closing.button2": "Zungumza na Timu Yetu",
        "contact.details.title": "Maelezo ya Mawasiliano",
        "contact.details.primaryOffice": "Eneo la Ofisi Kuu",
        "contact.details.otherOffices": "Maeneo Mengine ya Ofisi",
        "contact.details.reachUs": "Tufikie",
        "contact.details.phoneUS": "Simu (US):",
        "contact.details.phoneZambia": "Simu (Zambia):",
        "contact.details.whatsapp": "Whatsapp:",
        "contact.details.email": "Barua pepe:",
        "contact.details.usOffice": "Marekani (Newark, NJ)",
        "contact.details.zambiaOffice": "Zambia (Lusaka)"
    },
    "de": {
        "product.closing.title": "Fangen Sie dort an, wo Sie stehen. Skalieren Sie mit Ihrem Wachstum.",
        "product.closing.subtitle": "Mit Receipters müssen Sie nicht alles am ersten Tag erledigen. Sie können:",
        "product.closing.step1": "Beginnen Sie mit der digitalen Belegausstellung, um Ihren Checkout zu modernisieren und Ihre Daten zu bereigen.",
        "product.closing.step2": "Fügen Sie die Belegspeicherung hinzu, um Ihre Transaktionshistorie zu zentralisieren und zu sichern.",
        "product.closing.step3": "Führen Sie die Receipters App ein, um Belege in die Hände von Mitarbeitern und Kunden zu geben.",
        "product.closing.step4": "Aktivieren Sie die Datenanalyse, wenn Sie bereit sind, Belege in einen strategischen Vermögenswert zu verwandeln.",
        "product.closing.comparePlans": "Pläne vergleichen",
        "product.closing.talkToTeam": "Sprechen Sie mit unserem Team",
        "product.closing.button1": "Pläne vergleichen",
        "product.closing.button2": "Sprechen Sie mit unserem Team",
        "contact.details.title": "Kontaktinformationen",
        "contact.details.primaryOffice": "Hauptstandort des Büros",
        "contact.details.otherOffices": "Weitere Bürostandorte",
        "contact.details.reachUs": "Erreichen Sie uns",
        "contact.details.phoneUS": "Telefon (US):",
        "contact.details.phoneZambia": "Telefon (Sambia):",
        "contact.details.whatsapp": "Whatsapp:",
        "contact.details.email": "E-Mail:",
        "contact.details.usOffice": "Vereinigte Staaten (Newark, NJ)",
        "contact.details.zambiaOffice": "Sambia (Lusaka)"
    }
}

for lng, data in translations.items():
    lng_path = os.path.join(base_path, lng, 'common.json')
    if not os.path.exists(lng_path):
        continue
        
    with open(lng_path, 'r') as f:
        lng_data = json.load(f)
        
    # Update with new translations
    lng_data.update(data)
    
    # Also ensure all keys from EN are present (sync)
    for k, v in en_data.items():
        if k not in lng_data:
            lng_data[k] = v
            
    with open(lng_path, 'w') as f:
        json.dump(lng_data, f, indent=2, ensure_ascii=False)
    print(f"Updated {lng}")
