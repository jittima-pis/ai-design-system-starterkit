# Label Component - Figma Design Context

## Figma File Information
- **File Name**: nook@shadcn_ui components with variables & Tailwind classes
- **File Key**: sdA9LFFgl6VNgmrHKdIMf9
- **Node ID**: 76-8597
- **Last Modified**: 2026-02-06T04:26:49Z
- **Component Link**: https://ui.shadcn.com/docs/components/label

## Component Overview
The Label component renders an accessible label associated with controls (like checkboxes). It's designed to work with form inputs and follows accessibility best practices.

---

## 1. Label Component Variations

The Label component has **2 distinct variations**:

### Variation 1: State=Default
- **Component ID**: 76:8616
- **Description**: Unchecked state with empty checkbox
- **Use Case**: Initial/default state before user interaction

### Variation 2: State=Checked
- **Component ID**: 76:8615
- **Description**: Checked state with checkmark icon visible
- **Use Case**: After user selects/checks the option

---

## 2. Component Structure and Layout

### Overall Container Structure
```
Label Frame (Main Container)
├── Frame 1 (Header Section)
│   └── Component description
│       ├── "Label" (Title - Text-4xl/Semi Bold)
│       ├── "Renders an accessible label..." (Description - Text-base/Regular)
│       └── Buttons (View in Shadcn link + icon)
└── Label Component Set
    ├── State=Default
    │   ├── Box (Checkbox)
    │   └── Text
    │       └── "Accept terms and conditions"
    └── State=Checked
        ├── Box (Checkbox with check icon)
        └── Text
            └── "Accept terms and conditions"
```

### Layout Mode
- **Main Frame**: Vertical layout with 40px spacing
- **Label Component Set**: Vertical layout with 16px spacing
- **Each State Component**: Horizontal layout with 8px spacing between checkbox and text
- **Alignment**: Center-aligned vertically, left-aligned horizontally

### Dimensions
- **Main Frame**: 498px width × 344px height
- **Component Set Container**: 257px width × 96px height (hug content)
- **Each Label Variant**: 217px width × 20px height (hug content)
- **Checkbox Box**: 16px × 16px (fixed size)
- **Text**: 193px width × 20px height (hug content)

---

## 3. Styling Specifications

### Colors

#### Text Colors
- **Label Title**:
  - RGB: `rgb(10, 10, 10)` / `#0A0A0A`
  - Variable: `VariableID:374:416`
  - Description: Primary foreground color

- **Description Text**:
  - RGB: `rgb(115, 115, 115)` / `#737373`
  - Variable: `VariableID:402:601`
  - Description: Muted/secondary text color

- **Label Text**:
  - RGB: `rgb(10, 10, 10)` / `#0A0A0A`
  - Variable: `VariableID:374:416`
  - Description: Same as title - primary foreground

#### Background Colors
- **Main Frame Background**:
  - RGB: `rgb(255, 255, 255)` / `#FFFFFF`
  - Variable: `VariableID:373:398`
  - Description: Pure white background

- **Checkbox (Default State)**:
  - RGB: `rgb(255, 255, 255)` / `#FFFFFF`
  - Variable: `VariableID:373:398`
  - Description: White background

- **Checkbox (Checked State)**:
  - RGB: `rgb(23, 23, 23)` / `#171717`
  - Variable: `VariableID:424:349`
  - Description: Dark/primary color

- **Button Background**:
  - RGB: `rgb(245, 245, 245)` / `#F5F5F5`
  - Variable: `VariableID:381:885`
  - Description: Light gray background

#### Border/Stroke Colors
- **Border Color (All)**:
  - RGB: `rgb(229, 229, 229)` / `#E5E5E5`
  - Variable: `VariableID:374:417`
  - Description: Light gray border

- **Checkmark Icon**:
  - RGB: `rgb(250, 250, 250)` / `#FAFAFA`
  - Variable: `VariableID:1049:336`
  - Description: Near-white color for checkmark

### Typography

#### Component Title ("Label")
- **Font Family**: Inter
- **Font Weight**: 600 (Semi Bold)
- **Font Size**: 36px
- **Line Height**: 40px (111.11% of font size)
- **Letter Spacing**: 0px
- **Text Style**: Text-4xl/Semi Bold (Style ID: 94:92)
- **Variables**:
  - Font Family: `VariableID:1043:1120`
  - Font Size: `VariableID:1043:1119`
  - Font Weight: `VariableID:1043:1102`
  - Line Height: `VariableID:1043:1089`
  - Letter Spacing: `VariableID:1043:1112`

#### Component Description
- **Font Family**: Inter
- **Font Weight**: 400 (Regular)
- **Font Size**: 16px
- **Line Height**: 24px (150% of font size)
- **Letter Spacing**: 0px
- **Text Style**: Text-base/Regular (Style ID: 94:49)
- **Variables**:
  - Font Family: `VariableID:1043:1120`
  - Font Size: `VariableID:1043:1114`
  - Font Weight: `VariableID:1043:1103`
  - Line Height: `VariableID:1043:1095`
  - Letter Spacing: `VariableID:1043:1112`

#### Label Text ("Accept terms and conditions")
- **Font Family**: Inter
- **Font Weight**: 500 (Medium)
- **Font Size**: 14px
- **Line Height**: 20px (142.86% of font size)
- **Letter Spacing**: 0px
- **Text Style**: Text-sm/Medium (Style ID: 94:38)
- **Variables**:
  - Font Family: `VariableID:1043:1120`
  - Font Size: `VariableID:1043:1088`
  - Font Weight: `VariableID:1043:1100`
  - Line Height: `VariableID:1043:1096`
  - Letter Spacing: `VariableID:1043:1112`

#### Button Text ("View in Shadcn")
- **Font Family**: Inter
- **Font Weight**: 500 (Medium)
- **Font Size**: 14px
- **Line Height**: 20px (142.86% of font size)
- **Letter Spacing**: 0px
- **Text Decoration**: Underline
- **Hyperlink**: https://ui.shadcn.com/docs/components/label
- **Text Style**: Text-sm/Medium (Style ID: 94:38)

### Spacing

#### Padding
- **Main Frame**: 56px all sides
- **Component Set**: 20px all sides
- **Button Horizontal**: 12px left and right
- **Variable IDs**:
  - Main padding: `VariableID:90:476`
  - Component padding: `VariableID:90:475`
  - Button padding: `VariableID:90:408`

#### Spacing/Gaps
- **Main Frame Item Spacing**: 40px (between header and component)
  - Variable: `VariableID:381:513`
- **Header Section Item Spacing**: 8px (between title and description)
  - Variable: `VariableID:381:495`
- **Header Horizontal Spacing**: 16px (between description and button)
  - Variable: `VariableID:381:575`
- **Component Set Item Spacing**: 16px (between states)
  - Variable: `VariableID:381:575`
- **Label Item Spacing**: 8px (between checkbox and text)
  - Variable: `VariableID:90:489`
- **Button Item Spacing**: 6px (between text and icon)
  - Variable: `VariableID:381:520`

### Border Radius

#### Main Frame
- **Corner Radius**: 24px all corners
- **Variable**: `VariableID:90:558`

#### Component Set
- **Corner Radius**: 12px all corners
- **Variable**: `VariableID:90:556`

#### Checkbox
- **Corner Radius**: 4px all corners
- **Variables**: `VariableID:90:552` (all corners)

#### Button
- **Corner Radius**: 6px all corners
- **Variable**: `VariableID:90:554`

### Borders
- **Stroke Weight**: 1px (all borders)
- **Stroke Align**: Inside
- **Variable**: `VariableID:381:324`
- **Component Set Border Style**: Dashed (10px dash, 5px gap)

### Shadows

#### Box Shadow (Applied to checkbox and button)
- **Effect Style**: Box Shadow/shadow-xs (Style ID: 402:712)
- **Type**: Drop Shadow
- **Color**: `rgba(0, 0, 0, 0.1)` (10% black)
- **Offset X**: 0px
- **Offset Y**: 1px
- **Blur Radius**: 2px
- **Spread**: 0px

---

## 4. Specific Design Details and States

### Default State (Unchecked)
- **Checkbox Appearance**:
  - White background (`#FFFFFF`)
  - Light gray border (`#E5E5E5`, 1px)
  - 4px corner radius
  - Box shadow (0px 1px 2px rgba(0,0,0,0.1))
  - Empty (no icon inside)

- **Text Appearance**:
  - Dark gray text (`#0A0A0A`)
  - 14px, Medium weight (500)
  - 20px line height

### Checked State
- **Checkbox Appearance**:
  - Dark background (`#171717`)
  - No visible border (blends with background)
  - 4px corner radius
  - Box shadow (0px 1px 2px rgba(0,0,0,0.1))
  - Contains white checkmark icon

- **Checkmark Icon**:
  - Type: Vector (custom path)
  - Color: Near-white (`#FAFAFA`)
  - Size: 12px × 12px container, 7.5px × 6.75px actual
  - Stroke: 1px
  - Stroke Cap: Round
  - Stroke Join: Round
  - Position: Centered in checkbox

- **Text Appearance**:
  - Same as default state (no change)

### Interactive Elements

#### "View in Shadcn" Button
- **Background**: Light gray (`#F5F5F5`)
- **Border**: Light gray (`#E5E5E5`, 1px)
- **Border Radius**: 6px
- **Padding**: 12px horizontal
- **Height**: 32px (fixed)
- **Contents**: Text + external link icon
- **Text Decoration**: Underline
- **Link URL**: https://ui.shadcn.com/docs/components/label
- **Shadow**: Box shadow (0px 1px 2px rgba(0,0,0,0.1))
- **Icon**: square-arrow-out-up-right (16px × 16px)

---

## 5. Component Properties

### Variant Properties
```typescript
{
  "State": {
    "type": "VARIANT",
    "defaultValue": "Default",
    "variantOptions": ["Checked", "Default"]
  }
}
```

### Component Set Details
- **Component Set ID**: 76:8617
- **Component Set Name**: Label
- **Key**: 11953cee2f800dd4dd476c5a1006c56e63c7c47f

---

## Design Token Variable References

### Key Variables Used
1. **Colors**:
   - Primary foreground: `VariableID:374:416` → `#0A0A0A`
   - Background: `VariableID:373:398` → `#FFFFFF`
   - Border: `VariableID:374:417` → `#E5E5E5`
   - Muted text: `VariableID:402:601` → `#737373`
   - Primary dark: `VariableID:424:349` → `#171717`
   - Light background: `VariableID:381:885` → `#F5F5F5`
   - Checkmark: `VariableID:1049:336` → `#FAFAFA`

2. **Typography**:
   - Font Family: `VariableID:1043:1120` → "Inter"
   - Font Sizes: Multiple IDs (1088, 1114, 1119)
   - Font Weights: Multiple IDs (1100, 1102, 1103)
   - Line Heights: Multiple IDs (1089, 1095, 1096)
   - Letter Spacing: `VariableID:1043:1112` → 0px

3. **Spacing**:
   - Various padding: IDs 90:408, 90:475, 90:476
   - Various gaps: IDs 381:495, 381:513, 381:520, 381:575, 90:489

4. **Border Radius**:
   - IDs: 90:552, 90:554, 90:556, 90:558

5. **Border Width**:
   - ID: 381:324 → 1px

6. **Stroke Weight (icons)**:
   - ID: 595:475 → 1px
   - ID: 626:3622 → Used for icon strokes

---

## Implementation Notes

### Accessibility
- Label is properly associated with checkbox control
- Uses semantic HTML structure
- Supports keyboard interaction
- Visual feedback for checked/unchecked states

### Layout Behavior
- Uses CSS Flexbox (Auto Layout in Figma)
- Horizontal layout with center vertical alignment
- Text wraps if needed (layout sizing: HUG)
- Maintains 8px gap between checkbox and text

### Responsive Considerations
- Fixed checkbox size (16px × 16px)
- Text width adjusts to content (193px example)
- Minimum height: 20px (to match line height)

### Component Example Text
"Accept terms and conditions" - This is the sample text used in the design, representing a typical use case for the Label component.

---

## CSS Implementation Guide

### Recommended CSS Structure
```css
.label-root {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.label-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
}

.label-checkbox--checked {
  background: #171717;
  border-color: #171717;
}

.label-text {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #0A0A0A;
}

.checkmark-icon {
  width: 12px;
  height: 12px;
  color: #FAFAFA;
  stroke-width: 1px;
}
```

---

## Summary

The Label component in Figma is a well-designed, accessible form label that:
- Has 2 clear states (Default/Checked)
- Uses a consistent design system with design tokens
- Follows modern UI patterns with proper spacing and typography
- Includes visual feedback through checkboxes
- Is built with Auto Layout for flexibility
- Maintains accessibility best practices
- Uses the Inter font family throughout
- Has subtle shadows for depth
- Includes proper color contrast for readability

The component is part of a larger design system that uses Figma Variables extensively for consistency and easy theming.
