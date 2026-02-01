#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Wizualizacja interfejsu Rozszerzonej Rzeczywistości (AR)
dla systemu uniwersyteckiego
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Tworzenie obrazu tła (symulacja widoku kampusu)
width, height = 1920, 1080
image = Image.new('RGB', (width, height), color=(135, 206, 235))  # niebieskie niebo

# Rysowanie
draw = ImageDraw.Draw(image, 'RGBA')

# Rysowanie budynku uniwersyteckiego (prosty prostokąt)
# Ściana budynku
draw.rectangle([(300, 400), (1620, 900)], fill=(180, 180, 180), outline=(100, 100, 100), width=3)

# Okna
for row in range(3):
    for col in range(8):
        x = 400 + col * 150
        y = 480 + row * 130
        draw.rectangle([(x, y), (x+80, y+100)], fill=(100, 150, 200), outline=(50, 50, 50), width=2)

# Drzwi wejściowe
draw.rectangle([(860, 700), (1060, 900)], fill=(101, 67, 33), outline=(50, 30, 10), width=3)

# Chodnik/trawa
draw.rectangle([(0, 900), (1920, 1080)], fill=(34, 139, 34))

# Próba załadowania domyślnej czcionki
try:
    font_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 36)
    font_medium = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 22)
except:
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()
    font_small = ImageFont.load_default()

# ===== FUNKCJA 1: NAWIGACJA =====
# Strzałka kierunkowa z informacją o dystansie
arrow_color = (255, 200, 0, 200)
# Strzałka w górę
arrow_points = [(960, 150), (900, 250), (940, 250), (940, 300), (980, 300), (980, 250), (1020, 250)]
draw.polygon(arrow_points, fill=arrow_color, outline=(255, 150, 0))

# Ramka z informacją nawigacyjną
nav_box = [(800, 80), (1120, 140)]
draw.rectangle(nav_box, fill=(0, 0, 0, 180), outline=(255, 200, 0), width=3)
draw.text((820, 90), "→ Budynek A, Sala 315", fill=(255, 255, 255), font=font_medium)

# Dystans
draw.text((950, 320), "45m", fill=(255, 255, 255), font=font_large)
# Tło pod tekstem dystansu
bbox = draw.textbbox((950, 320), "45m", font=font_large)
draw.rectangle([(bbox[0]-5, bbox[1]-5), (bbox[2]+5, bbox[3]+5)], fill=(0, 0, 0, 150))
draw.text((950, 320), "45m", fill=(255, 200, 0), font=font_large)

# ===== FUNKCJA 2: ROZPOZNAWANIE OSÓB =====
# Symulacja wykrycia osoby (ramka wokół "drzwi" jako placeholder osoby)
person_box = [(1300, 500), (1500, 850)]
draw.rectangle(person_box, fill=None, outline=(0, 255, 0), width=4)

# Info box osoby
info_box = [(1510, 500), (1880, 720)]
draw.rectangle(info_box, fill=(0, 0, 0, 200), outline=(0, 255, 0), width=3)

info_texts = [
    "Dr Jan Kowalski",
    "Wykładowca",
    "Informatyka stosowana",
    "Pokój: A-201",
    "Konsultacje: Śr 14-16",
    "Status: Dostępny ✓"
]

y_pos = 515
for text in info_texts:
    draw.text((1520, y_pos), text, fill=(255, 255, 255), font=font_small)
    y_pos += 35

# ===== FUNKCJA 3: INFORMACJE O POMIESZCZENIU =====
# Nakładka na budynek z info o sali
room_info_box = [(50, 450), (280, 650)]
draw.rectangle(room_info_box, fill=(0, 0, 0, 200), outline=(100, 200, 255), width=3)

room_texts = [
    "Sala: A-101",
    "Lab. Komputerowy",
    "─────────────",
    "Teraz: Wolna",
    "15:00 - Zajęty",
    "Miejsca: 30"
]

y_pos = 465
for text in room_texts:
    draw.text((60, y_pos), text, fill=(255, 255, 255), font=font_small)
    y_pos += 30

# ===== FUNKCJA 4: PLAN ZAJĘĆ I PRZYPOMNIENIA =====
# Panel harmonogramu w prawym górnym rogu
schedule_box = [(1400, 80), (1870, 380)]
draw.rectangle(schedule_box, fill=(0, 0, 0, 200), outline=(255, 100, 255), width=3)

draw.text((1420, 95), "📅 Plan dnia", fill=(255, 200, 255), font=font_medium)
draw.text((1420, 135), "─────────────────", fill=(255, 255, 255), font=font_small)

schedule_items = [
    "13:00 - Bazy Danych (A-315)",
    "15:00 - KCK Lab (C-102) ⚠",
    "17:00 - Systemy Operacyjne",
    "",
    "Deadline: Projekt KCK",
    "Pozostało: 5 dni"
]

y_pos = 170
for item in schedule_items:
    color = (255, 100, 100) if "⚠" in item or "Deadline" in item else (255, 255, 255)
    draw.text((1420, y_pos), item, fill=color, font=font_small)
    y_pos += 30

# ===== FUNKCJA 5: DODATKOWE INFO EDUKACYJNE =====
# Ikona skanowania (nad drzwiami budynku)
scan_center = (960, 800)
for radius in [60, 80, 100]:
    draw.ellipse([(scan_center[0]-radius, scan_center[1]-radius),
                  (scan_center[0]+radius, scan_center[1]+radius)],
                 fill=None, outline=(0, 255, 255, 100), width=2)

# Info box z dodatkowymi materiałami
edu_box = [(50, 750), (350, 1000)]
draw.rectangle(edu_box, fill=(0, 0, 0, 200), outline=(0, 255, 255), width=3)

edu_texts = [
    "📖 Dodatkowe materiały:",
    "• Model 3D budynku",
    "• Wirtualny spacer",
    "• Historia SAN",
    "• Mapa kampusu PDF",
    "🔗 Kliknij aby otworzyć"
]

y_pos = 765
for text in edu_texts:
    draw.text((60, y_pos), text, fill=(255, 255, 255), font=font_small)
    y_pos += 35

# ===== LEGENDA FUNKCJI (na dole) =====
legend_box = [(600, 950), (1320, 1050)]
draw.rectangle(legend_box, fill=(0, 0, 0, 220), outline=(255, 255, 255), width=2)

legend_text = "AR Functions: 🧭Nawigacja  👤Rozpoznawanie  🏢Pomieszczenia  📅Plan  📖Materiały"
draw.text((620, 975), legend_text, fill=(255, 255, 0), font=font_medium)

# Status bar (górny pasek)
status_bar = [(0, 0), (1920, 60)]
draw.rectangle(status_bar, fill=(0, 0, 0, 180))
draw.text((20, 15), "AR System v1.0 | Uczelnia SAN", fill=(255, 255, 255), font=font_medium)
draw.text((1600, 15), "GPS: ✓ | Battery: 87%", fill=(150, 255, 150), font=font_medium)

# Zapisywanie obrazu
output_path = "AR_interface_visualization.png"
image.save(output_path, quality=95)
print(f"Wizualizacja AR została zapisana jako: {output_path}")
print(f"Rozmiar: {width}x{height} px")
