const vision = {
  id: 'vision',
  title: '비전 (이미지 입력)',
  titleEn: 'Vision (Image Input)',
  icon: 'fa-image',
  sections: [
    {
      title: '이미지 입력 기능',
      titleEn: 'Image Input Feature',
      content: `Claude는 이미지를 분석하고 이해할 수 있는 멀티모달 능력을 갖추고 있습니다. API를 통해 이미지를 전송하면 내용 설명, OCR, 다이어그램 해석, 코드 스크린샷 분석 등 다양한 작업을 수행합니다.

### 지원되는 이미지 형식

| 형식 | MIME 타입 | 최대 크기 |
|------|-----------|-----------|
| JPEG | image/jpeg | 20MB |
| PNG | image/png | 20MB |
| GIF | image/gif | 20MB |
| WebP | image/webp | 20MB |

### Base64 인코딩으로 이미지 전송

\`\`\`python
import anthropic
import base64

client = anthropic.Anthropic()

# 이미지 파일을 Base64로 인코딩
with open("screenshot.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/png",
                        "data": image_data
                    }
                },
                {
                    "type": "text",
                    "text": "이 스크린샷에서 에러 메시지를 분석해주세요."
                }
            ]
        }
    ]
)

print(message.content[0].text)
\`\`\`

### URL로 이미지 전송

\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "url",
                        "url": "https://example.com/diagram.png"
                    }
                },
                {
                    "type": "text",
                    "text": "이 다이어그램을 설명해주세요."
                }
            ]
        }
    ]
)
\`\`\``,
      contentEn: `Claude has multimodal capabilities that allow it to analyze and understand images. When images are sent via the API, it can perform various tasks such as content description, OCR, diagram interpretation, and code screenshot analysis.

### Supported Image Formats

| Format | MIME Type | Max Size |
|--------|-----------|----------|
| JPEG | image/jpeg | 20MB |
| PNG | image/png | 20MB |
| GIF | image/gif | 20MB |
| WebP | image/webp | 20MB |

### Sending Images with Base64 Encoding

\`\`\`python
import anthropic
import base64

client = anthropic.Anthropic()

# Encode image file to Base64
with open("screenshot.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/png",
                        "data": image_data
                    }
                },
                {
                    "type": "text",
                    "text": "Analyze the error message in this screenshot."
                }
            ]
        }
    ]
)

print(message.content[0].text)
\`\`\`

### Sending Images via URL

\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "url",
                        "url": "https://example.com/diagram.png"
                    }
                },
                {
                    "type": "text",
                    "text": "Describe this diagram."
                }
            ]
        }
    ]
)
\`\`\``
    },
    {
      title: '비전 활용 사례',
      titleEn: 'Vision Use Cases',
      content: `### 다중 이미지 분석

여러 이미지를 한 번에 전송하여 비교 분석할 수 있습니다:

\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/png", "data": design_v1}
                },
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/png", "data": design_v2}
                },
                {
                    "type": "text",
                    "text": "두 디자인 시안을 비교하고 UI/UX 관점에서 분석해주세요."
                }
            ]
        }
    ]
)
\`\`\`

### 주요 활용 사례

**1. 코드 스크린샷 분석**
- 에러 메시지 스크린샷을 분석하여 해결 방안 제시
- 코드 이미지를 텍스트로 변환하여 리뷰

**2. 문서 OCR**
- 스캔된 문서의 텍스트 추출
- 손글씨 노트 인식 및 디지털화

**3. 차트/그래프 해석**
- 데이터 시각화 결과 분석
- 트렌드 파악 및 인사이트 도출

**4. UI/UX 분석**
- 모바일/웹 UI 스크린샷 리뷰
- 접근성 및 사용성 평가

### 비전 사용 시 주의사항

- 이미지 해상도가 높을수록 더 정확한 분석이 가능합니다
- 이미지 내 텍스트는 선명할수록 좋은 결과를 얻습니다
- 이미지 크기가 클수록 더 많은 토큰을 소비합니다
- 매우 작은 텍스트나 저해상도 이미지는 정확도가 떨어질 수 있습니다
- 한 요청에 최대 20개의 이미지를 포함할 수 있습니다`,
      contentEn: `### Multi-Image Analysis

You can send multiple images at once for comparative analysis:

\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/png", "data": design_v1}
                },
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/png", "data": design_v2}
                },
                {
                    "type": "text",
                    "text": "Compare these two design mockups and analyze from a UI/UX perspective."
                }
            ]
        }
    ]
)
\`\`\`

### Key Use Cases

**1. Code Screenshot Analysis**
- Analyze error message screenshots and suggest solutions
- Convert code images to text for review

**2. Document OCR**
- Extract text from scanned documents
- Recognize and digitize handwritten notes

**3. Chart/Graph Interpretation**
- Analyze data visualization results
- Identify trends and derive insights

**4. UI/UX Analysis**
- Review mobile/web UI screenshots
- Evaluate accessibility and usability

### Vision Usage Tips

- Higher image resolution enables more accurate analysis
- Clearer text in images yields better results
- Larger images consume more tokens
- Very small text or low-resolution images may have reduced accuracy
- A maximum of 20 images can be included in a single request`
    }
  ]
};

export default vision;
