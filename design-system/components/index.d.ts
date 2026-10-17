// Componentes de Asistente de Cátedra AI: funciones sin dependencias que devuelven un elemento del DOM.
export interface ButtonProps { label: string; variant?: 'primary' | 'secondary' | 'text'; href?: string; type?: 'button' | 'submit'; disabled?: boolean; onClick?: (e: MouseEvent) => void }
export declare function Button(props: ButtonProps): HTMLElement;

export interface BadgeProps { label: string; tone?: 'neutral' | 'navy' | 'correct' | 'partial' | 'incorrect' }
export declare function Badge(props: BadgeProps): HTMLElement;

export interface FieldProps { label: string; id?: string; placeholder?: string; value?: string; hint?: string; error?: string; multiline?: boolean; code?: boolean }
export declare function Field(props: FieldProps): HTMLElement;

export interface FeedbackProps { verdict?: 'correcta' | 'parcial' | 'incorrecta' | 'consejo'; text: string; kicker?: string; meta?: string }
export declare function Feedback(props: FeedbackProps): HTMLElement;

export interface StatProps { label: string; value: string | number; of?: string | number; note?: string; alert?: boolean }
export declare function Stat(props: StatProps): HTMLElement;

declare global { interface Window { Catedra: { Button: typeof Button; Badge: typeof Badge; Field: typeof Field; Feedback: typeof Feedback; Stat: typeof Stat } } }
