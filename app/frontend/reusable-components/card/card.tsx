import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
}

export function Card({ children, title, description }: Props) {
  return (
      <section
          className="p-10 shadow-card min-h-[400px] w-full rounded-2xl border border-solid border-slate-200 flex flex-col">
       <img
            id="dimg_3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA0CAMAAADomgtXAAAAgVBMVEX///9IQLtFPbpAN7k3LbczKLYxJrYvI7U9NLhDO7o7Mrg6MLg1K7dCObnZ2O75+fycmdZlX8Pq6fbf3vGin9iurN3z8vrT0uyJhc9ybMdrZsXFw+YsH7V1cMi9u+NUTb5+ectZU8BfWcG1s+CSjtJNRbzMyumoptuDf80hELMOALD2uKVUAAACtUlEQVRIiZ2W6ZqqMAyGoTubKJtsI6K4zNz/BR4aBdrSc4Zjf/hA7Eua5Etbx9k0il1zzcpzVdfpNsBx0iY795STQODIQ4jtNjDJabgQGogIufNo49+5c+tjBYGB3A0ObyY1Du/rQxDvPwT904dguCWpnQXkxQbwYotxA+fU3opDly3gOVqB0XkLWOLPquHs16B//YVJk/En91dg0PwLyivR1uNDE/xHGdO9S8WYzUg+hyuQJVYqzjv67gc6zijWILc11e7JxVxyCGadHGHheqaWDfL+ZRbS1o0p16Z4h9GWCRPsLB6NgMgYzd1MK+otYKUrkxzHZLUmaJNqrq8LguyN/oAAzJHoQUI4puisoPl5WetduAU0pClyZ1VJezsWdD1p0ElrVh3nqdebj2tNmQ7erKAxC2frwD0r6FSaSyRnnXQNMPvJYbgk99GGNJe2tpImfXuC5OeaS6knAzvI86vQXbLUdLk6AR7cE1JjOdFcVjJKVQTGLpf0cj1U7u4HTepw/Komr1a5K4O/Inn06dsFRKmJmCjceZpL5XZx17QeNsb6lW2uXNLmy8XmqvIQloWrFuGJbMnL0ocRiH9QE4Sf0uTOmVXUWihtHgywBpWksgAJmUm+SGCvtBODs2FQVwtiSelEqgXpFb1wOBxyJUMIyTB34UQqeS2QUikG2rgHy8ci2BNT8Z7k5wrpKv3KIG/FYSlo1EufRffOorqbx7VSd/K6A13D+WtRB1eG50vJYtDUQxenGEMPxAOfbF4AdW8CMOj3wHig85GD+BMaNilnG4dkxqU8YJCrt3PxuE2HnItJFus2vwM/6RfDbqRJXY7d/sKIwN44VYiseNtuXN4iEXuCIS1Dn1iugvExH6petG37/TN9ODmVF04JbV/Fj0/V9+Hv19Z4HOp7cjzl+8f0djz+AbaiJeycGjwCAAAAAElFTkSuQmCC"
            className="YQ4gaf zr758c wA1Bge self-center" height="52" width="56" alt="" data-csiid="11" data-atf="1"/>
        <h1 className="text-3xl m-0 mb-4 mt-4 self-center font-black">{title}</h1>
        {description && <p className="text-[hsla(243,30%,13%,.63)] text-base m-0 mb-1">{description}</p>}
        {children}
      </section>
  );
}
