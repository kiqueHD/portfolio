import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm!: FormGroup;
  readonly recipientEmail = 'enriquehernbay@gmail.com';

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      asunto: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
        ],
      ],
      mensaje: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
        ],
      ],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }

    const email = this.contactForm.get('email')?.value;
    const subject = this.contactForm.get('asunto')?.value;
    const message = this.contactForm.get('mensaje')?.value;

    const mailtoLink = `mailto:${this.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;

    // Reset form after opening mailto
    setTimeout(() => this.contactForm.reset(), 100);
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors || !field.touched) return '';

    if (field.errors['email']) return 'Email inválido';
    if (field.errors['minlength']) return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;

    return '';
  }

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }
}
