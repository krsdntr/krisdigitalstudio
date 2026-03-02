---
title: "ChemFlow"
date: "2026-02-13"
industry: "Research"
techStack:
  - TypeScript
  - JavaScript
  - HTML
  - CSS
  - Python
liveUrl: "https://krsdntr.github.io/chemflow/"
description: "ChemFlow is an open-source, serverless web application designed to streamline the preparation of protein purification buffers. By integrating physicochemical analysis (pI, GRAVY) with a deterministic buffer formulation engine, ChemFlow eliminates manual calculations and reduces batch-to-batch variability in biochemical experiments."
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/575abe12-833e-4e76-9279-9ed1afab19f7/13149210-9240-4058-8ebc-d1f755288bc5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CTLIDA%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T075613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPgJN%2Bn2IqlANjZcLxT1Oc1hao%2B48e7LPNVIIELcZ89QIhAIlQQpAhUpC6uuuEUlNEqC0NxxWJ5blIIPJ5Lu5jEaW4KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqFDxjwEDS7gyBWIgq3AMF7cHvR1d7GsJMcshlOqQSRgUA49%2Bec6ONHrYTdwezDZD%2FEH9Phq78jyHhyTMe4IXanFzH4s1v3%2F1TlO9p7J%2FCMjc%2Brra2DGetf%2B66mkBgaj3ysKhGpg9J9NQSltsqJzsI7Geq%2BkONaG7Y3GYzQNYHmkmZSiDq5YY%2FOip7aW2wMAb3CWAlS6pbrHlS8npccecHhiHs8oAK60G1%2Fp8CMUhz%2FBvmDs7%2F0cLyh%2BkOt21g03fgCZW6NEu89W7nT1kxLkVlprcMP4MhyD%2BVcFo3ZfEG6iYDIMSN9NSTjwJA5daIbWdmab%2Bzw46bpna%2FIcsUiTF9nSCfuAcf77RtHAYWqdgMKFsCu964MaiLPmGel3%2ByfYYyRQU5zUFdAAjlMoxVM5aU7yfi8VzPbdsSUwI94e2S1GumgQUAXZ7CDNRIWiLg1O1huLVDSX7EZeIA%2FOf0cLUMVyh96CtKq82hDwA5eoqi%2FioNcvI5psHgv7B0v99wiq8%2F93YnxZQfuNOrxq1DyqY2B9vjADH8IhfXyAhi%2BGzNlLUg7lapCwX9FKT2oI5N1z8SFvMLiON6bVI9%2BbSQJlDCv5Z3bgqRHMAeuNRDANhr3qb0Xc5Z8IwogOBGJ4%2F4ZCrbW6mFAyy5zSi0jjDl65TNBjqkAWDZyc%2F2wQah8sEjGU25TvAk0WLc4NHkC9oJXRSfxrYh7W80fbUIezGEOU1Y7FQoUkMeKKYxH0lVAhszvWR8BUyxxFP23RgeW%2FYbKcGuSI3jHTLmY01uqod1kZxNMfqqHG36ExueSZh2QqpDBvThVsEceCFxWoaMgIP8ZmaYJKeMe5v22QBnkLZl3ah47tlxUkc9p2sfNGift35%2BSkXvzdRRLllE&X-Amz-Signature=bba1a41d0355e2af5e0e1f2406e65ce012153932af4b260ef436ff3df0ef9640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
---


**ChemFlow** is an open-source, serverless web application designed to streamline the preparation of protein purification buffers. By integrating physicochemical analysis (pI, GRAVY) with a deterministic buffer formulation engine, ChemFlow eliminates manual calculations and reduces batch-to-batch variability in biochemical experiments.


🔗 **Live Demo:** [https://krsdntr.github.io/chemflow/](https://krsdntr.github.io/chemflow/)


---


**Key Features**


**1. 🧬 Protein Characterization**

- **Isoelectric Point (pI)** calculation using the iterative dissociation algorithm.
- **GRAVY (Grand Average of Hydropathy)** score for solubility prediction.
- **Titration Curve** visualization to predict charge states across pH ranges.

**2. 🎯 Smart Purification Strategy**

- Automatically suggests **Ion Exchange (IEX)** strategies (Anion vs. Cation) based on pI.
- Recommends optimal **pH**, **Buffer System**, and **Salt Concentration**.
- Detects oxidation-prone residues (Cysteines) and recommends reducing agents (DTT).

**3. ⚖️ Precision Buffer Formulator**

- **Henderson-Hasselbalch Equation**: Calculates exact ratios of conjugate acid/base.
- **Temperature Correction**: Adjusts pKa values based on operating temperature (e.g., 4°C vs 25°C).
- **Gravimetric "Smart Mix"**: Generates recipes based on mass (g), eliminating the need for manual pH titration.
- **Additives Support**: Automatically calculates masses for Salts (NaCl), EDTA, and DTT.

**4. 📄 Laboratory Documentation**

- Generates **Publication-Ready PDF Protocols**.
- Includes **Safety Checklists**, **Reagent Tables**, and **Methodology Citations**.
